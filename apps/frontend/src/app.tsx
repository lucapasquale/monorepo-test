import React from 'react';
import { gql, useQuery } from '@apollo/client';

const USERS_QUERY = gql`
  query GetUsers {
    users {
      id
      name
    }
  }
`;

export function App() {
  const { loading, data } = useQuery(USERS_QUERY);

  if (loading || !data) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </h1>
  );
}
