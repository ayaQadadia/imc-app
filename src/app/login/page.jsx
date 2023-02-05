import Image from "next/image";
import LoginForm from "@/components/loginForm";

export default function Login() {
    return (
        <div className="flex h-screen w-screen bg-gradient-to-bl from-black to-black items-center justify-center">
            <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl shadow-gray-300">
                <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                    <Image
                        src="/BMITracker.svg"
                        alt="imc app Logo"
                        width={180}
                        height={50}
                        priority
                    />
                    <p className="text-sm text-gray-600">
                        Use your email and password to sign in
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
}