import { Fragment, useEffect } from "react"

export default function ExportedTitle() {
    console.log('-----------loading remote component--------------')
    useEffect(() => {
        console.log("HOOKS WORKS")
    })

    return (
        <Fragment>
            <div>
                <h1>
                    {' '}
                    This came from <code>checkout</code>
                </h1>
                <p>And it works like a charm v2</p>
            </div>
        </Fragment>

    )
}