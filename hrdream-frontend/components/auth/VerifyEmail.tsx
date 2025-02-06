export default function VerifyEmailForm() {
    return (
        <div className="w-full sm:w-2/3 flex flex-col bg-white pb-8" data-testid="verify-email-form">
            <p className="text-sm text-end p-8" data-testid="already-member">
                <>
                    Already a member?{" "}
                    <a href="/auth/sign-in" className="font-bold" data-testid="login-link">
                        Log in
                    </a>
                </>
            </p>
            <div className="self-center w-3/6 sm:p-8" data-testid="form-content">
                <h2 className="text-2xl font-bold mb-4" data-testid="form-title">
                    Verify your email
                </h2>
                <p className="mb-8" data-testid="form-description">
                    We have sent a verification code to your email inbox.
                </p>
                <div className="flex gap-4 mb-6 w-full" data-testid="input-group">
                    {[...Array(4)].map((_, index) => (
                        <input 
                            key={index}
                            type="text" 
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none bg-zinc-50"
                            data-testid={`verification-input-${index}`}
                        />
                    ))}
                </div>
                <button 
                    className="bg-blue-500 text-white rounded px-4 py-2 w-full"
                    data-testid="verify-button"
                >
                    Verify
                </button>
                <p className="text-gray-600 text-sm mb-2" data-testid="recaptcha-text">
                    This site is protected by reCAPTCHA and the Google Privacy Policy.
                </p>
            </div>
        </div>
    );
}
