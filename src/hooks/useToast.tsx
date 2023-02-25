import { useState } from 'react';
import toast from 'react-hot-toast';

import { sleep } from '../utils/sleep';

interface ToastOptions {
  delay?: number;
  components?: {
    Loading?: React.FC;
    Success?: React.FC;
    Error?: React.FC;
  };
}

export const useToast = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const base = async function <T>(promise: Promise<T>, options?: ToastOptions): Promise<T | undefined> {
    try {
      setIsLoading(true);
      return await toast.promise(
        (async () => {
          const result = await promise;
          if (options?.delay) await sleep(options.delay);
          return result;
        })(),
        {
          loading: 'Loading...',
          success: (e: T) => {
            setIsLoading(false);
            toast.dismiss('tx.loading');
            return options?.components?.Success ? <options.components.Success /> : `Succcess!`;
          },
          error: (err) => {
            setIsLoading(false);
            toast.dismiss('tx.loading');
            return options?.components?.Error ? <options.components.Error /> : `${err}`;
          }
        },
        {
          error: {
            id: 'tx.error'
          },
          success: {
            id: 'tx.success'
          },
          loading: {
            id: 'tx.loading'
          }
        }
      );
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
  };

  const error = (err: string) => {
    toast.error(`${err}`, {
      id: 'tx.error'
    });
  };

  const transaction = async function <T>(promise: Promise<T>): Promise<T | undefined> {
    return await base(promise, {
      components: {
        Success: () => <div>Transaction success!</div>,
        Error: () => <div>Transaction failed!</div>
      }
    });
  };

  return {
    isLoading,
    toast: {
      transaction,
      promise: base,
      error
    }
  };
};
