export default function LeftPane() {
    return (
        <div className="bg-gray-900 text-white flex flex-col justify-between items-start p-8 min-w-1.5 h-screen sm:w-1/3 pl-16">
            <div className="flex items-center gap-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-9 h-9 fill-blue-500"
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66.6-.84 1.49-1.32 2.45-1.34-.72-1.22-3.6-2-5.68-2-2.07 0-4.96.78-5.68 2.01zM4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3 1.34 3 3 3zm16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"></path>
                    <path d="M21 14h-3.27c-.77 0-1.35.45-1.68.92-.04.06-1.36 2.08-4.05 2.08-1.43 0-3.03-.64-4.05-2.08-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2z"></path>
                </svg>
                <h1 className="text-xl font-bold">HRdream</h1>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold mb-6">Plan includes</h2>
                <ul className="flex flex-col items-start gap-2">
                    {[
                        "Unlimited employee uploads",
                        "Free forever",
                        "Full author permissions",
                        "Pro tips",
                    ].map((text, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="black"
                                    className="w-3 h-3"
                                >
                                    <path d="M20.285 6.292a1 1 0 0 0-1.415 0l-8.597 8.596L5.71 11.325a1 1 0 0 0-1.415 1.415l5 5a1 1 0 0 0 1.415 0l9-9a1 1 0 0 0 0-1.415z" />
                                </svg>
                            </span>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
            <div></div>
        </div>
    );
}
