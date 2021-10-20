export type User = {
  id: string;
  name: string;
};

export function isLuca(user: User | null) {
  if (!user) {
    return false;
  }

  return user.name === 'Luca';
}
