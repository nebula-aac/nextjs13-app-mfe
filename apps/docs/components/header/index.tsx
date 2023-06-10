'use client'

import dynamic from "next/dynamic"
import { Fragment } from "react"

const Nav = dynamic(
    () => {
        // @ts-expect-error TODO: support types for importing MF
        const mod = import('home/nav').catch(console.error)
        return mod
    },
    {
        ssr: false,
        suspense: true,
    }
)

export default function NavBar() {
    return (
        <Fragment>
            <Nav />
        </Fragment>
    )
}