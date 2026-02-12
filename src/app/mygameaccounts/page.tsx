'use client'

import { GameAccountInfo } from "@/src/interfaces/gameAccount"
import { myGameAccounts } from "@/src/utils/gameAccount"
import { useEffect, useState } from "react"

export default function Page() {

    const [gameAccounts, setGameAccounts] = useState([] as GameAccountInfo[])

    const getGameAccounts = async () => {
        const res = await myGameAccounts()
        console.log(res)
        // setGameAccounts(res)
    }

    useEffect(() => {
        getGameAccounts()
    }, [])
    return ('my game accounts')
}