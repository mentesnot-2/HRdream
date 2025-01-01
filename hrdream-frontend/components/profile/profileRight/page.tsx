import QuickCardAction from "../profileLeft/quickActionCard/QuickActions";



export default function ProfilePages() {
    return (
        <div className="bg-neutral-50 flex justify-end w-1/2">
            <div className="flex flex-col ">
                <h1>Quick Action</h1>
                <div className="flex justify-end items-center gap-4">
                    <QuickCardAction
                        title="Reflection time"
                        subtitle="10 questions"
                        backgroundColor="bg-blue-500"
                    />
                    <QuickCardAction
                        title="Daily Progress"
                        subtitle="1 task to goal"
                        backgroundColor="bg-teal-500"
                    />
                    <QuickCardAction
                        title="FAQ"
                        subtitle="Find all the answers"
                        backgroundColor="bg-indigo-300"
                    />
                </div>
            </div>
        </div>
    )
}