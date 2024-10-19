'use client';

import { Input, Button, Spacer, Card } from "@nextui-org/react";
import Image from "next/image";
import { SocialProviderEnum } from "@/schemas/auth/socialProviders";
import { SocialLoginButtonParams } from "@/schemas/auth/socialLoginBtnSchema";
function SocialLoginButton({
    provider,
    icon,
    buttonColor = "bg-blue-500",
    textColor = "text-white",
    callbackUrl = "",
}: SocialLoginButtonParams) {

    const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>, provider: SocialProviderEnum) => {
        e.preventDefault();
        const signInOptions: any = {
            callbackUrl: callbackUrl,
            redirect: true,
        };

        await signIn(provider, signInOptions);
    };

    return (
        <><Spacer y={3} />
        <Button
            className={`h-[55px] flex items-center justify-center w-full ${buttonColor} rounded-md px-4 ${textColor}`}
            onClick={(e) => handleSignIn(e, provider)}
        >
            <div className="flex items-center justify-center">
                {icon && (
                    <div className="relative w-7 h-7 rounded-sm bg-white">
                        <Image
                            src={icon}
                            alt={`${provider} icon`}
                            className="absolute top-0 left-0 w-full h-full"
                            width={24}
                            height={24} />
                    </div>
                )}
                <span className="ml-3 font-bold text-md">Continue with {provider.valueOf()}</span>
            </div>
        </Button></>
    );
}
export default SocialLoginButton;


function signIn(provider: SocialProviderEnum, signInOptions: any) {
    throw new Error("Function not implemented.");
}

