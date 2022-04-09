import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/products">Products</Link>
      <br />
      <Link href="/sell">Sell</Link>
      <br />
      <Link href="/orders">Orders</Link>
      <br />
      <Link href="/account">Account</Link>
      <br />
    </nav>
  );
}
