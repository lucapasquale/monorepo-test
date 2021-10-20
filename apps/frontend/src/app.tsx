import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { isLuca } from '@test-monorepo/users';
import { Button } from '@test-monorepo/ui-components';

const USERS_QUERY = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
`;

export function App() {
  const [count, setCount] = useState(0);
  const [id, setId] = useState('');

  const { data } = useQuery(USERS_QUERY, {
    variables: { id },
    skip: !id,
  });

  return (
    <div>
      <input value={id} onChange={(e) => setId(e.target.value)} />

      <h4>Is Luca: {isLuca(data?.user ?? null) ? 'Yes' : 'No'}</h4>
      <pre>User: {JSON.stringify(data?.user)}</pre>

      <Button onClick={() => setCount((c) => c + 1)}>
        Custom Button, Clicks: {count}
      </Button>
    </div>
  );
}
