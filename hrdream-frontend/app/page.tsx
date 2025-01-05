// app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
    // comment test for weeb hook
    redirect('/auth/sign-in');
}
