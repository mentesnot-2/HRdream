import Image from "next/image";

interface CalendarCardProps {
    title: string;
    icon: string; // Path to the icon
    iconAlt: string;
}

const CalendarCard: React.FC<CalendarCardProps> = ({ title, icon, iconAlt }) => {
    return (
        <div className="flex flex-col items-center bg-white border border-white rounded-lg p-4 shadow-md w-24">
            <h3 className="text-sm font-medium text-gray-900 mb-2">{title}</h3>
            <div className="bg-blue-100 p-3 rounded-full">
                <Image
                    src={icon}
                    alt={iconAlt}
                    className="w-6 h-6"
                />
            </div>
        </div>
    );
};

export default CalendarCard;
