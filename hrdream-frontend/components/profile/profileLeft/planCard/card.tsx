import Image from "next/image";


interface CardProps {
    title:string;
    week:string;
    team:string;
    avatars:{src:string,alt:string}[];
}

const Card:React.FC<CardProps> = ({title,week,team,avatars}) => {
    return (
        <div className="border border-white rounded-lg p-4 shadow-md bg-white">
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500">{week}</p>
            <div className="flex items-center mt-3">
                <div className="flex -space-x-2">
                    {avatars.map((avatar,index) => (
                        <div className="w-6 h-6 rounded-full overflow-hidden border border-white" key={index}>
                            <Image
                                src={avatar.src}
                                alt={avatar.alt}
                                width={32}
                                height={32}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                <p className="ml-3 text-sm text-gray-700">{team}</p>
            </div>
        </div>
    )
}

export default Card;