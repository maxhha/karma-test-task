import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import {AUTH_TOKEN} from "constants";

function fetchQuery(
  operation,
  variables,
) {
  return fetch(':4000/graphql', {
    method: 'POST',
    headers: {
      'Authorization':
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
