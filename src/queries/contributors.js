import { createClient } from 'urql'
const APIURL = 'https://api.studio.thegraph.com/query/48904/vlance_v3/version/latest'

export async function contributors() {
  const tokensQuery = `
    query {
      {
        verifiedGithubContributors {
          id
          contributor
          blockNumber
          blockTimestamp
        }
      }
    }
  `

  const client = createClient({
    url: APIURL,
  });

  const response = await client.query(tokensQuery).toPromise();
  return response.data;
};

