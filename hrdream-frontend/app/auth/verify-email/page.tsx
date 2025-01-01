import React from 'react';
import VerifyEmailForm from '@/components/auth/VerifyEmail';
import LeftPane from '@/components/auth/LeftPane';

export default function VerifyEmail() {

    return (
        <div className="flex flex-col sm:flex-row min-h-screen">
            <LeftPane />
            <VerifyEmailForm />
        </div>
    )
}