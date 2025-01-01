import QuickCardAction from "./quickActionCard/QuickActions";



export default function ProfilePage() {
    return (
        <div className="bg-neutral-100 flex justify-end">
            <div className="flex flex-col ">
                <h1>Quick Action</h1>
                <div className="flex justify-end items-center gap-4">
                    <QuickCardAction
                        title="Reflection time"
                        subtitle="10 questions"
                        backgroundColor="bg-blue-500"
                    />
                    <QuickCardAction
                        title="Reflection time"
                        subtitle="10 questions"
                        backgroundColor="bg-teal-500"
                    />
                    <QuickCardAction
                        title="Reflection time"
                        subtitle="10 questions"
                        backgroundColor="bg-indigo-300"
                    />
                </div>
            </div>
        </div>
    )
}