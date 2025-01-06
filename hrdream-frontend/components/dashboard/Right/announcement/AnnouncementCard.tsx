import React from 'react'
import Image from 'next/image';
import pin from '@/public/pin.svg';
import dot from '@/public/dot.svg';

interface AnnouncementCardProps {
    title: string;
    date: string;
    timeAgo: string;
}


const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ title, date, timeAgo }) => {
    return (
        <div className=' p-4 border rounded-lg shadow-sm bg-white'>
            <div className="text-sm text-gray-500 flex justify-between items-center">
                {timeAgo}

                <div className='flex gap-2'>
                    <Image
                        src={pin}
                        alt="Clock"
                        width={20}
                    />
                    <Image
                        src={dot}
                        alt="Dot"
                        width={20}
                    />
                </div>
            </div>
            <div className="text-gray-900">
                {title}
            </div>
            <p className="text-sm text-gray-500">
                {date}
            </p>
        </div>
    )
}

export default AnnouncementCard;