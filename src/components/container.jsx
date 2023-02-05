"use client";
import NextLink from 'next/link';
import cn from 'classnames';
import {signOut} from "next-auth/react";

function NavItem({ href, text }) {
    return (
        <NextLink
            href={href}
            className={cn(
                    'font-semibold text-gray-200',
                'hidden md:inline-block p-1 rounded-lg hover:bg-gray-800 transition-all'
            )}
        >
            <span className="capsize">{text}</span>
        </NextLink>
    );
}

export default function Container(props) {

    const { children } = props;

    return (
        <div className="h-screen w-screen bg-gray-900">
            <div className="flex flex-col h-20">
                <nav className="flex justify-between w-full relative max-w-2xl border-gray-700 mx-auto bg-gray-900 pt-7 text-gray-100">
                    <div className="space-x-4">
                        <NavItem href="protected/" text="Home" />
                        <NavItem href="protected/history" text="History" />
                        <NavItem href="protected/diary" text="Calculate your BMI" />
                        <button className={cn(
                            'font-semibold text-gray-800 dark:text-gray-200',
                            'hidden md:inline-block p-1 rounded-lg hover:bg-gray-800 transition-all'
                        )} onClick={() => signOut()}>Log out</button>
                    </div>
                </nav>
            </div>
            <main
                id="skip"
                className="flex flex-col bg-gray-900"
            >
                {children}
            </main>
        </div>
    );
}