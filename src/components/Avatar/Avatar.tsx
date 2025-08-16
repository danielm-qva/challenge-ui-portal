'use client'
import {MapPin, User} from "lucide-react";
import Image from "next/image";

function Avatar({size = "md"}: { size?: "sm" | "md" }) {
    const sizes = {
        sm: "h-8 w-8",
        md: "h-10 w-10"
    };

    return (
        <div className={`${sizes[size]} rounded-full bg-gray-200 flex items-center justify-center overflow-hidden`}>
            <Image
                src="/diverse-user-avatars.png"
                alt="Usuario"
                className="h-full w-full object-cover"
                width={40}
                height={40}
            />
            <User className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"} text-gray-500 hidden`}/>
        </div>
    );
}

export default function HeaderUserSection() {
    return (
        <>
            {/* Mobile */}
            <div className="flex items-center gap-3 md:hidden">
                <MapPin className="h-5 w-5 text-indigo-600"/>
                <Avatar size="sm"/>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex flex-shrink-0">
                <Avatar size="md"/>
            </div>
        </>
    );
}
