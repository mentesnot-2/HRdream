import React from 'react';
import dynamic from 'next/dynamic';
import Spinner from '@/components/Spinner';



const WellnessCheckin = dynamic(() => import('@/components/reflect/page'), {
    loading: () => <Spinner />,
})



export default function ReflectPage() {

    return (
        <WellnessCheckin />
    )
}