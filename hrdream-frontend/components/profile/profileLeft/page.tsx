import TaskCard from "./taskCard/TaskCard";



export default function ProfilePageLeft() {
    return (
        <div className="bg-neutral-50 flex flex-col justify-start w-1/2 p-6">
            <div className="flex flex-col">
                <h1 className="font-semibold text-lg">Good Morning,Admira</h1>
                <p className="text-sm text-gray-500">Open the panel and watch your progress and growth in knowledge</p>
            </div>
            <button 
                className="text-blue-500 border border-blue-500 rounded-md px-4 py-2 mt-4 w-2/5"
            >
                Account settings
            </button>
            <TaskCard/>
        </div>
    )
}