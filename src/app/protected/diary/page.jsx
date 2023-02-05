"use client";

import toast, {Toaster} from "react-hot-toast";
import Container from "@/components/container";
import {useState} from "react";
import {useSession} from "next-auth/react";
import NextLink from "next/link";
import Loading from "@/components/loading";

export default function BMIForm() {

    const [bmi, setBmi] = useState()
    const [loading, setLoading] = useState(false);

    const session = useSession()
    return (
        <Container>
            {session.status === "authenticated" ?
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
                <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                    <p className="text-sm text-gray-600">
                        Your BMI is : {bmi}
                    </p>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                fetch(`/api/auth/publish/${session.data.user.email}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            weight: e.currentTarget.weight.value,
                        }),
                    }).then(async (res) => res.json()).then((data) => {toast.success('Bmi ready!')
                    setLoading(false);setBmi(data);}).catch((err) => toast.error(err));
                }
            }
            className="flex flex-col space-y-4 px-2 py- 4"
        >
            <div>
                <label
                    htmlFor="weight"
                    className="block text-xs text-gray-600 uppercase"
                >
                    Weight
                </label>
                <input
                    id="weight"
                    name="weight"
                    type="number"
                    placeholder="KG"
                    required
                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                />
            </div>
            <div className="pt-3">
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
                        <p>Calculate</p>
                    )}
                </button>
            </div>
            <Toaster position="top-left"
                     reverseOrder={false}/>
        </form>
                </div>
            </div>
        </div> : <div className={"flex flex-col items-center py-8"}>
                    <p className={"font-bold text-white text-xl"}>Unauthorized access to this page!</p>
                    <NextLink className="text-gray-900 dark:text-gray-100 underline"
                              href={"login"}
                    >
                        Click here to sign in.
                    </NextLink>
                </div>}
        </Container>
    )
}