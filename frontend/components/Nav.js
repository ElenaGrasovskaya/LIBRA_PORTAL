import Link from 'next/link';
import styled from 'styled-components';
import SignOut from './SignOut';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  console.log('user', user);
  return (
    <Navigation>
      {user && (
        <>
          {user.name}
          <Link href="/ordersList">Заказы</Link>
          <Link href="/calc">Рассчеты</Link>
          <SignOut />
        </>
      )}
      {!user && <Link href="/signin">Войти</Link>}
    </Navigation>
  );
}

const Navigation = styled.nav`
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  & a,
  button {
    background: #666;
    font-size: 1.2rem;
    color: white;
    z-index: 2;
    transform: skew(-7deg);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.2rem 0.5rem;
    border: 0;
  }
`;
