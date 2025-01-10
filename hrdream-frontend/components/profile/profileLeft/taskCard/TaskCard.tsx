
import Task from "./Task/Task"

export default function TaskCard() {
    return (
        <div className="flex flex-col items-start justify-center w-full bg-white rounded-lg shadow-md mt-6 p-4 max-sm:w-full">
            <div
                className="flex flex-col items-start justify-center w-full h-2/4 text-black mb-4"
            >
                <h1 className="text-lg font-bold">My tasks</h1>
                <p className="text-sm text-gray-500">
                    2 active tasks
                </p>
            </div>
            <Task title={"Interview with developer"} dueDate="Due today" />
            <Task title={"Reflection time"} dueDate="Tomorrow" />
            <Task title={"Sprint question preparation"} dueDate="Due today" />
            <button
                type="button"
                className="text-md text-blue-500 my-2 self-center"
            >
                See all tasks
            </button>
        </div>

    )
}