import React from 'react'
import Spinner from '@/components/Spinner'
import dynamic from 'next/dynamic'

const ApplicationTracker = dynamic(() => import('@/components/applicantTracker/page'), {
    loading: () => <Spinner />,
})
export default function ApplicantTrackerPage() {
    return (
        <ApplicationTracker />
    )
}