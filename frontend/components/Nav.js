import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/ordersList">Заказы</Link>
      <br />
      <Link href="/calc">Рассчеты</Link>
      <br />
    </nav>
  );
}
