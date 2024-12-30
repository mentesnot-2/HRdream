export default function LeftPane() {
    return (
        <div className="bg-gray-900 text-white flex flex-col justify-between items-start p-8 min-w-1.5 h-screen sm:w-1/3">
            <h1 className="text-xl font-bold self-center">HRdream</h1>

            <ul className="flex flex-col gap-4 items-start">
                <li className="flex items-center gap-2">Unlimited employee uploads</li>
                <li className="flex items-center gap-2">Free forever</li>
                <li className="flex items-center gap-2">Full author permissions</li>
                <li className="flex items-center gap-2">Pro tips</li>
            </ul>
        </div>
    );
}
