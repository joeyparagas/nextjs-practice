// Main Page

import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen">
            <h1 className="text-4xl">Testing Next.js with Tailwind CSS</h1>
            <Link href="/blog">Blog Page</Link>
        </div>
    );
}
