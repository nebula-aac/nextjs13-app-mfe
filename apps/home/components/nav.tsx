import Link from "next/link";
import { Fragment } from "react";

const links = [
  { href: "https://vercel.com/home", label: "Vercel" },
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
].map((link, index) => {
  return { ...link, key: `nav-link-${index}` };
});

export default function Nav() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/p/something">Federated Catch All</Link>
            <Link href="/checkout">Checkout</Link>
          </li>
          {links.map(({ key, href, label }) => (
            <li key={key}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
        gap: 1rem;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        padding-right: 10px;
      }
    `}</style>
      </nav>
    </Fragment>
  );
}
