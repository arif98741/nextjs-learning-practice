import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <h1>products</h1>
      <ul>
        <h2>
          <Link href="/products/1">product 1</Link>
        </h2>
        <h2>
          <Link href="/products/2">product 2</Link>
        </h2>
        <h2>
          <Link href="/products/3">product 3</Link>
        </h2>
      </ul>

      <Link href="/">Home</Link>
    </>
  );
}
