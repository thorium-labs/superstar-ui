import { request, gql } from "graphql-request";

const INDEXER_URL = "https://api.subquery.network/sq/j0nl1/superstar";

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

export const getRecentPurchases = async (limit: number) => {
  const data = await request(INDEXER_URL, queryRecentPurchases, {
    limit,
  });
  return data.purchases.nodes;
};

export const getRecentWinners = async (limit: number) => {
  const data = await request(INDEXER_URL, queryRecentWinners, {
    limit,
  });
  return data.winners.nodes;
};
