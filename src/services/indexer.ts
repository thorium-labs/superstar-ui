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
    prizes(last: $limit) {
      nodes {
        id
        drawId
        winner
        prize
      }
    }
  }
`;

const queryClaimedPrize = gql`
  query claimedPrize($drawId: String!, $winner: String!) {
    prizes(filter: { winner: { equalTo: $winner }, drawId: { equalTo: $drawId } }) {
      nodes {
        prize
        drawId
        winner
      }
    }
  }
`;

const queryStatistics = gql`
  query {
    statistic(id: "global") {
      numberOfDraws
      numberOfTickets
      numberOfWinners
      totalPrizes
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
  return data.prizes.nodes;
};

export const getClaimedPrize = async (drawId: string, winner: string) => {
  const data = await request(INDEXER_URL, queryClaimedPrize, {
    drawId,
    winner
  });
  return data.prizes.nodes[0];
};

export const getStatistics = async () => {
  const { statistic } = await request(INDEXER_URL, queryStatistics);
  return statistic;
};
