"use client";

import * as React from "react";
import {useState} from "react";
import Image from "next/image";

export default function BMI() {

    const [bmi, setBmi] = useState(0)

    return (
        <div className="relative pt-48 pb-12">
            <header className="absolute inset-x-0 top-0 z-10 py-8">
                <div className="px-6 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between">
                        <Image
                            src="/BMITracker.svg"
                            alt="imc app Logo"
                            width={180}
                            height={50}
                            priority
                        />

                        <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                            <a
                                href="/"
                                title=""
                                className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-normal
                            leading-7
                            transition-all
                            duration-200
                            border-2
                            rounded-full
                            text-white
                            border-primary
                            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                            hover:bg-white hover:text-black
                            focus:ring-offset-secondary
                        "
                            >
                                Home
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="absolute inset-0">
                <img className="object-cover w-full h-screen"
                     src="/health.jpeg" alt=""/>
            </div>

            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col justify-center items-center w-full">
                        <p className="text-lg text-black mb-5">
                            Your BMI is : {bmi}
                        </p>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                let weight = e.currentTarget.weight.value;
                                let height = e.currentTarget.height.value*Math.pow(10,-2);
                                setBmi(weight/Math.pow(height,2))
                            }}
                            className="flex flex-col space-y-4"
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
                            <div>
                                <label
                                    htmlFor="Height"
                                    className="block text-xs text-gray-600 uppercase"
                                >
                                    Weight
                                </label>
                                <input
                                    id="height"
                                    name="height"
                                    type="number"
                                    placeholder="CM"
                                    required
                                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                />
                            </div>
                            <div className="pt-3">
                                <button
                                    className={
                                        "border-black bg-black text-white hover:bg-white hover:text-black flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"}
                                >
                                        <p>Calculate</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
}