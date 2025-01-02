
interface CircularCardProps {
    icon: any;
    backgroundColor?: string;
}

export default function CircularCard({icon,backgroundColor}: CircularCardProps) {
    return (
        <div 
            className={`flex justify-center items-center w-24 h-24 rounded-full text-${backgroundColor} font-bold text-2xl shadow-md circular-card`}
        >
            {icon}
        </div>
    )
}