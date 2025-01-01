



export default function VerifyEmailForm() {
    return (
        <div className="w-full sm:w-2/3 flex flex-col bg-white pb-8">
            <p className="text-sm text-end p-8 ">
                {
                    <>
                        Already a member?{" "}
                        <a href="/auth/sign-in" className="font-bold">
                            Log in
                        </a>
                    </>
                    
                }
            </p>
            <div className="self-center w-3/6 sm:p-8">
                <h2 className="text-2xl font-bold mb-4">
                    Verify your email
                </h2>
                <p className="mb-8">
                    We have sent verification code to your email inbox.
                </p>
                <div className="flex gap-4 mb-6 w-full">
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none bg-zinc-50" 
                    />
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none bg-zinc-50" 
                    />
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none bg-zinc-50" 
                    />
                    <input 
                    type="text" 
                    className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none bg-zinc-50"/>
                </div>
                <button className="bg-blue-500 text-white rounded px-4 py-2 w-full">
                    Verify
                </button>
                <p 
                    className='text-gray-600 text-sm mb-2'
                >
                    This site is protected by reCAPTCHA and the Google Privacy Policy. 
                </p>
            </div>
        </div>
    )
}