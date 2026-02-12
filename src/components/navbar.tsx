"use client"

import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdownMenu"
import { getCurrentUser, logOut } from "../utils/auth"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import { deleteCookie, getCookie } from "../utils/cookie"
import AddAccount from "./addAccount"
import AddGame from "./addGame"

export function Navbar() {
    const router = useRouter()
    const [email, setEmail] = useState("")

    const onLoad = async () => {
        setEmail("")
        const user = await getCurrentUser()
        console.log(user)
        if (user) {
            setEmail(user.email)
        }
    }

    useEffect(() => {
        onLoad()
    }, [])

    const logoutHandler = async () => {
        const res = await logOut()
        if (res.status < 400) {
            await deleteCookie("token")
            toast.success(res.msg)
        } else {
            toast.error(res.error.message);
            return
        }
        onLoad()
    }

    return (
        <header className="border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href='/'>
                        <h1 className="text-lg font-semibold text-black tracking-tight">
                            GammaC
                        </h1>
                    </Link>
                    <div className="flex items-center gap-4">

                        {!email ? <>
                            <Link href={'/signup'}>
                                <p className="text-sm text-gray-600 font-medium hover:opacity-70">
                                    Sign Up
                                </p>
                            </Link>
                            <Link href={'/signin'}>
                                <button className="cursor-pointer flex-1 bg-black text-white p-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                                    Log In
                                </button>
                            </Link>
                        </> : <>
                            <AddGame />
                            <AddAccount />
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage
                                            src={'/default-avatar.png'}
                                            alt="profile picture"
                                        />
                                        <AvatarFallback>User</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40" align="start">
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>{email}</DropdownMenuLabel>
                                        <DropdownMenuItem>
                                            Profile
                                        </DropdownMenuItem>
                                        <Link href={'/mygameaccounts'}>
                                            <DropdownMenuItem>
                                                My Game Accounts
                                            </DropdownMenuItem>
                                        </Link>
                                        <DropdownMenuItem>
                                            Billing
                                            {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Settings
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>Team</DropdownMenuItem>
                                        <DropdownMenuSub>
                                            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                            <DropdownMenuPortal>
                                                <DropdownMenuSubContent>
                                                    <DropdownMenuItem>Email</DropdownMenuItem>
                                                    <DropdownMenuItem>Message</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>More...</DropdownMenuItem>
                                                </DropdownMenuSubContent>
                                            </DropdownMenuPortal>
                                        </DropdownMenuSub>
                                        <DropdownMenuItem>
                                            New Team
                                            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className="text-red-700" onClick={logoutHandler}>
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </>
                        }
                        {/* <button
                onClick={() => setCurrency("myr")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${currency === "myr"
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                MYR
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setCurrency("idr")}
                className={`px-4 py-2 text-sm font-medium transition-colors ${currency === "idr"
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                IDR
              </button> */}
                    </div>
                </div>
            </div>
        </header>
    )
}
