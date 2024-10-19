'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; // Import for redirecting

import Image from 'next/image';
import { SocialProviderEnum } from "@/schemas/auth/socialProviders";
import AuthErrorMessages from "@/schemas/auth/errors/errorMessages";
import AuthForm from "../auth/forms/form";

function LoginPage() {

    const formHeading: string = "Alm Al Quran";
    const formSubheading: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam at minima quia perspiciatis ipsa exercitationem,";
    // const providers: SocialProviderEnum[] = [SocialProviderEnum.Google, SocialProviderEnum.Github];
    const providers: SocialProviderEnum[] = [];
    const errorMessages: AuthErrorMessages = {
        "Error generating": "This is a bad error",
        "OAuthAccountNotLinked": "A previous account exists with this email, try the original social provider you signed with.",
        "InvalidCallbackUrl": "Invalid callback URL.",
    }

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            {isMobile ? (
                <div className="w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-4">Login</h1>
                    {/* <LoginForm /> */}
                    <div className="auth-page">
                        < AuthForm heading={formHeading} subheading={formSubheading} providers={providers} errorCodes={errorMessages} />
                    </div>
                </div>
            ) : (
                <div className="flex justify-between items-center w-full h-full">
                    <div className="flex flex-col items-center justify-center w-1/2">
                        <h1 className="text-2xl font-bold mb-4">Login</h1>
                        {/* <LoginForm /> */}
                        <div className="auth-page">
                            < AuthForm heading={formHeading} subheading={formSubheading} providers={providers} errorCodes={errorMessages} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-1/2 h-full bg-gray-200 p-4">
                        <div className="w-full h-full bg-white rounded-full overflow-hidden">
                            <Image src="/background.svg" alt="Mountain" width={100} height={100} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginPage;