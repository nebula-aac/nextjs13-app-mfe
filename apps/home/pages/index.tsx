import dynamic from "next/dynamic";
import { Fragment } from "react";

/*
let useHook
if (typeof window !== "undefined") {
  useHook = require('shop/useCustomHook').default
}
*/

const RemoteTitle = dynamic(
  () => {
    // @ts-expect-error TODO: support types for importing MF
    const mod = import('checkout/title').catch(console.error)
    return mod
  },
  {
    suspense: true,
    ssr: false
  }
)

export default function Home() {
  return (
    <Fragment>
      <div>
        <div className="hero">
          <RemoteTitle />
          <h1>Welcome to Next.js <code>Home</code></h1>
          <p className="description">
            To get started, edit <code>pages/index.tsx</code> and save to reload.
          </p>
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </Fragment>
  )
}