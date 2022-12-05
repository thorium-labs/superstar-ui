import { request, gql } from 'graphql-request';

const INDEXER_URL = import.meta.env.VITE_INDEXER_URL;

const queryRecentPurchases = gql`
  query recentPurchases($limit: Int) {
    purchases(last: $limit) {
      nodes {
        id
        buyer
        drawId
        tickets
      }
    }
  }
`;

const queryRecentWinners = gql`
  query recentWinners($limit: Int) {
    winners(last: $limit) {
      nodes {
        id
        drawId
        prize
      }
    }
  }
`;

const queryClaimedPrize = gql`
  query claimedPrize($id: String!) {
    winners(filter: { id: { equalTo: $id } }) {
      nodes {
        prize
        address
      }
    }
  }
`;

export const getRecentPurchases = async (limit: number) => {
  const data = await request(INDEXER_URL, queryRecentPurchases, {
    limit
  });
  return data.purchases.nodes;
};

export const getRecentWinners = async (limit: number) => {
  const data = await request(INDEXER_URL, queryRecentWinners, {
    limit
  });
  return data.winners.nodes;
};

export const getClaimedPrize = async (id: string) => {
  const data = await request(INDEXER_URL, queryClaimedPrize, {
    id
  });
  return data.winners.nodes[0];
};
