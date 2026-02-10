"use client"

import { Button } from "@/src/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/src/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/src/components/ui/field"
import { Input } from "@/src/components/ui/input"
import { logIn } from "@/src/utils/auth"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"
import Parse from "@/lib/parse"
import { setCookie } from "@/src/utils/cookie"

export default function Page() {
    const router = useRouter()
    const [formData, setFormData] = useState({ email: 'j', password: '123123123', username: '' });

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast("Logging in...")
        const res = await logIn(formData);
        if (res.status < 400) {
            await setCookie("token", res.token!)
            toast.success(res.msg)
            window.location.reload()
        } else {
            toast.error(res.error.message);
            return
        }
    };
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login to your account</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="email">Email / Username</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="johndoe@example.com / johndoe"
                                            required
                                            onChange={handleChange}
                                        />
                                    </Field>
                                    <Field>
                                        <div className="flex items-center">
                                            <FieldLabel htmlFor="password">Password</FieldLabel>
                                            <a
                                                href="#"
                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                            >
                                                Forgot your password?
                                            </a>
                                        </div>
                                        <Input id="password" type="password" name="password" required onChange={handleChange} />
                                    </Field>
                                    <Field>
                                        <Button type="submit" onClick={handleSubmit}>Login</Button>
                                        {/* <Button variant="outline" type="button">
                                            Login with Google
                                        </Button> */}
                                        <FieldDescription className="text-center">
                                            Don&apos;t have an account? <a href="/signup">Sign up</a>
                                        </FieldDescription>
                                    </Field>
                                </FieldGroup>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}