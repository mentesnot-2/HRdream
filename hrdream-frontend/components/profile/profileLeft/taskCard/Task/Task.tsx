
import Image from "next/image"
interface Task {
    title:string,
    dueDate:string
}

export default function Task({title,dueDate}:Task) {
    return (
        <div className="w-full flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-300">
                    <Image
                        src="https://avatar.iran.liara.run/public/boy?username=Ash"
                        alt="profile"
                        width={24}
                        height={24}
                    />
                </div>
                <p className="text-sm text-gray-400">Admira</p>
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <p>{title}</p>
            </div>
            <p className="text-sm text-rose-400 ml-auto">{dueDate}</p>
            
        </div>
    )
}