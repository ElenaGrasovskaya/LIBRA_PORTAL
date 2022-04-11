import Link from 'next/link';
import styled from 'styled-components';

export default function Nav() {
  return (
    <Navigation>
      <Link href="/ordersList">Заказы</Link>

      <Link href="/calc">Рассчеты</Link>
    </Navigation>
  );
}

const Navigation = styled.nav`
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  & a {
    background: #666;
    font-size: 1.2rem;
    color: white;
    z-index: 2;
    transform: skew(-7deg);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.2rem 0.5rem;
  }
`;
