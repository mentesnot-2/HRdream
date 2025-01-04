import CalendarCard from "./Calendar";
import Card from "./planCard/card";
import TaskCard from "./taskCard/TaskCard";
import WorkingHoursChart from "./WorkingHoursChart";



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
            <TaskCard />
            <div className="flex mt-6 gap-4 items-start">
                <div className="grid grid-cols-2 gap-2 flex-grow">
                    <Card
                        title="Next retrospective"
                        week="Week 12"
                        team="Design team"
                        avatars={[
                            { src: 'https://avatar.iran.liara.run/public/boy?username=Ash', alt: 'User 1' },
                            { src: 'https://avatar.iran.liara.run/public/boy?username=Bash', alt: 'User 2' },
                            { src: 'https://avatar.iran.liara.run/public/boy?username=CAsh', alt: 'User 3' },
                        ]}
                    />
                    <Card
                        title="Next retrospective"
                        week="Week 12"
                        team="Design team"
                        avatars={[
                            { src: 'https://avatar.iran.liara.run/public/boy?username=Ash', alt: 'User 1' },
                            { src: 'https://avatar.iran.liara.run/public/boy?username=Bash', alt: 'User 2' },
                            { src: 'https://avatar.iran.liara.run/public/boy?username=CAsh', alt: 'User 3' },
                        ]}
                    />
                </div>

                <div className="flex-shrink-0">
                    <CalendarCard
                        title="Calendar"
                        icon="/calendar.png" 
                        iconAlt="Calendar Icon"
                    />
                </div>
            </div>
            <WorkingHoursChart/>
        </div>
    )
}