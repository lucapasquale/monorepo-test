import { ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: pink;
`;

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function Button(props: Props) {
  return <StyledButton {...props} />;
}
