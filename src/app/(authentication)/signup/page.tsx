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
import { signUp } from "@/src/utils/auth"
import { useState } from "react"
import { toast } from "react-toastify"

export default function Page() {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        toast("Signing up...")

        const res = await signUp(formData);
        if (res.status < 400) {
            toast.success(res.msg)
        } else {
            toast.error(res.error.message);
        }
    };
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle>Create an account</CardTitle>
                        <CardDescription>
                            Enter your information below to create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="username">Username</FieldLabel>
                                    <Input id="username" type="text" placeholder="johndoe123" name="username" onChange={handleChange} required />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                    />
                                    <FieldDescription>
                                        We&apos;ll use this to contact you. We will not share your email
                                        with anyone else.
                                    </FieldDescription>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="password">Password</FieldLabel>
                                    <Input id="password" type="password" name="password" onChange={handleChange} required />
                                    <FieldDescription>
                                        Must be at least 8 characters long.
                                    </FieldDescription>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="confirm-password">
                                        Confirm Password
                                    </FieldLabel>
                                    <Input id="confirm-password" type="password" required />
                                    <FieldDescription>Please confirm your password.</FieldDescription>
                                </Field>
                                <FieldGroup>
                                    <Field>
                                        <Button type="submit" onClick={handleSubmit}>Create Account</Button>
                                        {/* <Button variant="outline" type="button">
                                            Sign up with Google
                                        </Button> */}
                                        <FieldDescription className="px-6 text-center">
                                            Already have an account? <a href="/login">Log in</a>
                                        </FieldDescription>
                                    </Field>
                                </FieldGroup>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
