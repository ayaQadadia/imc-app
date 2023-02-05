"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import toast, {Toaster} from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                    signIn("credentials", {
                        redirect: false,
                        email: e.currentTarget.email.value,
                        password: e.currentTarget.password.value,
                    }).then(({ ok, error }) => {
                        setLoading(false);
                        if (ok) {
                            toast.success('Successfully Logged in!')
                            setTimeout(() => router.push("/protected"), 2000);
                        } else {
                            toast.error(error);
                        }
                    });
            }}
            className="flex flex-col space-y-4 bg-gray-300 px-4 py-8 sm:px-16"
        >
            <div>
                <label
                    htmlFor="email"
                    className="block text-xs text-gray-600 uppercase"
                >
                    Email Address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="password"
                    className="block text-xs text-gray-600 uppercase"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                />
            </div>
            <button
                disabled={loading}
                className={`${
                    loading
                        ? "cursor-not-allowed border-gray-200 bg-gray-100"
                        : "border-black bg-black text-white hover:bg-white hover:text-black"
                } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
            >
                {loading ? (
                    <Loading color="#808080" />
                ) : (
                    <p>Sign In</p>
                )}
            </button>
                <p className="text-center text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link href="register" className="font-semibold text-gray-800">
                        Sign up
                    </Link>{" "}
                    for free.
                </p>
            <Toaster/>
        </form>
    );
}