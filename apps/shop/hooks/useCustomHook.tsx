import { useEffect, useState } from "react";

function customHook(friendID: string) {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(() => {
        console.log("some custom hook")
    }, [])
}

export default customHook