"use client";

import { useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

export default function SignUpForm() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                fetch("/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: e.currentTarget.name.value,
                        email: e.currentTarget.email.value,
                        password: e.currentTarget.password.value,
                        age: parseInt(e.currentTarget.age.value),
                        height: parseInt(e.currentTarget.height.value),
                        gender: e.currentTarget.gender.value
                    }),
                    }).then(async (res) => {
                        setLoading(false);
                        if (res.status === 200) {
                            toast.success("Account created! Redirecting to login...");
                            setTimeout(() => {
                                router.push("login");
                            }, 2000);
                        } else {
                            toast.error(await res.text());
                        }
                    });
                }
            }
            className="flex flex-col space-y-4 bg-gray-300 px-4 py-8 sm:px-16"
        >
            <div>
                <label
                    htmlFor="name"
                    className="block text-xs text-gray-600 uppercase"
                >
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                />
            </div>
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
            <div>
                <label
                    htmlFor="age"
                    className="block text-xs text-gray-600 uppercase"
                >
                    Age
                </label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="26"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="age"
                    className="block text-xs text-gray-600 uppercase"
                >
                    Height
                </label>
                <input
                    id="height"
                    name="height"
                    type="number"
                    placeholder="175"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                />
            </div>
            <div>
                <label
                    htmlFor="gender"
                    className="block text-xs text-gray-600 uppercase"
                >
                    Gender
                </label>
                <input
                    id="gender"
                    name="gender"
                    type="text"
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
                    <p>Sign Up</p>
                )}
            </button>
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link href="login" className="font-semibold text-gray-800">
                        Sign in
                    </Link>{" "}
                    instead.
                </p>
            <Toaster/>
        </form>
    );
}