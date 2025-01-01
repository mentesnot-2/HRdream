import CircularCard from "./circularCard/circularCard"
import React from "react";

interface QuickActionsCardProps {
    title: string;
    subtitle: string;
    backgroundColor: string;
}

const QuickCardAction:React.FC<QuickActionsCardProps> = ({title,subtitle,backgroundColor}) => {
    return (
        <div className={`flex flex-col items-center justify-center w-40 h-52 ${backgroundColor} rounded-lg shadow-md pb-6`}>
            <div 
                className="flex flex-col items-center justify-center w-full h-2/4 text-white font-bold"
            >
                <h1 className="text-lg">{title}</h1>
                <p className="text-sm">{subtitle}</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-2/4">
                <CircularCard 
                    icon={"82 %"
                    }
                    backgroundColor={backgroundColor}
                />
            </div>
        </div>
    )
}
export default QuickCardAction;