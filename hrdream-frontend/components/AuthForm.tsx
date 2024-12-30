import google from '@/public/google.svg';
import apple from '@/public/apple.svg';
import Image from 'next/image';
interface AuthFormProps {
    type: "sign-in" | "sign-up";
}

export default function AuthForm({ type }: AuthFormProps) {
    const isSignIn = type === "sign-in";

    return (
        <div className="w-full sm:w-2/3 flex flex-col bg-white pb-8">
            <p className="text-sm text-end p-8 ">
                {
                    isSignIn ? (
                        <>
                            Don't have an account?{" "}
                            <a href="/auth/sign-up" className="font-bold">
                                Sign up
                            </a>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <a href="/auth/sign-in" className="font-bold">
                                Log in
                            </a>
                        </>
                    )
                }
            </p>
            <div className="self-center w-3/6 sm:p-8">
                <h2 className="text-2xl font-bold mb-4">
                    {isSignIn ? "Sign in" : "Sign up"}
                </h2>
                <p className="mb-8">
                    {
                        isSignIn ? "Sign in using your account with" : "Sign up with an already existing account"
                    }
                </p>
                <div className="flex gap-4 mb-6 w-full">
                    <button className="bg-zinc-50 border border-gray-300 rounded px-4 py-2 w-full flex items-center justify-center gap-2">
                        <Image
                            src={google}
                            alt="Google"
                            width={24}
                        />
                        Google
                    </button>
                    <button className="bg-zinc-50 border border-gray-300 rounded px-4 py-2 w-full flex items-center justify-center gap-2">
                        <Image
                            src={apple}
                            alt="Apple"
                            width={24}

                        />
                        Apple
                    </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                    Or {isSignIn ? "log in" : "sign up"} with your email address:
                </p>
                <form className="">
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            className=" border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:bg-white mb-2"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:bg-white mb-2"
                        />
                    </div>
                    {!isSignIn && (
                        <div>
                            <input
                                type="password"
                                placeholder="Repeat password"
                                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:bg-white mb-2"
                            />
                        </div>
                    )}
                    <button className="bg-blue-500 text-white rounded px-4 py-2 w-full">
                        {isSignIn ? "Sign in" : "Create an account"}
                    </button>
                    <p 
                        className='text-gray-600 text-sm mb-2'
                    >
                        This site is protected by reCAPTCHA and the Google Privacy Policy. 
                    </p>
                </form>
            </div>
        </div>
    );
}
