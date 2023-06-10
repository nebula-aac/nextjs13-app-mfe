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
            </nav>
        </Fragment>
    )
}