"use client";

import Link from 'next/link';
import Container from "@/components/container";
import {useSession} from "next-auth/react";
import NextLink from "next/link";
import {useRouter} from "next/navigation";

export default function Dashboard() {

    const session= useSession()
    const router = useRouter()
    return (
        <Container>
            {session.status === "authenticated" ?
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Hello {session.data.user.name}!
                </h1>
                <div className="mb-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        This is your personal space, here you can track your BMI daily. But make sure to log your {' '}
                        <Link
                            href="protected/diary"
                            className="text-gray-900 dark:text-gray-100 underline"
                        >
                            weight
                        </Link>
                        {' '}everyday as well
                    </p>
                </div>
                    <div className="flex justify-center">
                        <div className="block p-6 rounded-lg shadow-lg bg-neutral-800 max-w-sm">
                            <h5 className="text-white text-xl leading-tight font-medium mb-2">Quick tutorial</h5>
                            <p className="text-gray-200 text-base mb-4">
                                Click here for a quick tutorial on how to use this application.
                            </p>
                            <button type="button"
                                    className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    onClick={() => router.push("protected/tutorial")}>
                                Button
                            </button>
                        </div>
                    </div>
            </div> :
                <div className={"flex flex-col space-y-4 items-center py-8"}>
                    <p className={"font-bold text-white text-xl"}>Unauthorized access to this page!</p>
                    <NextLink className="text-gray-900 dark:text-gray-100 underline"
                                href={"login"}
                    >
                        Click here to sign in.
                    </NextLink>
                </div>
            }
        </Container>
    );
}

Dashboard.auth = true