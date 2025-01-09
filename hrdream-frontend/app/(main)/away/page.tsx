import React from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';

const AwayList = dynamic(() => import('@/components/away/page'), {
    loading: () => <Spinner />,
})

export default function AwayPage() {

    return (
        <div className=" bg-white flex w-full">
            <AwayList />
        </div>
    )
}