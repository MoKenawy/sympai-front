'use client';

import { Input, Spacer, Card, CardHeader, Divider, Tooltip, Button } from "@nextui-org/react";
import SocialLoginButton from "./socialLoginBtn";
import SignPolicy from "../signPolicy";
import { useSearchParams } from "next/navigation"
import AuthFormSchema from "@/schemas/auth/authFormSchema";
import CustomButton from "../customBtn";
import { SocialProviderEnum } from "@/schemas/auth/socialProviders";
import { getAuthToken } from "@/data-access/chatbotAPI";
import { useState } from "react";




function AuthForm({ heading, subheading, providers, errorCodes }: AuthFormSchema) {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const callbackUrl = "http://localhost:3000/ar/user-type";
    const [token, setToken] = useState<string | null>(null);


    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    // Change with your form functionality
    const formFunction = async (e: React.FormEvent<HTMLFormElement>) => {
        const token = await getAuthToken(email, password)
        setToken(token);
        console.log(token)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        formFunction(e);
    };



    return (
        <>
            <div className={"flex flex-col justify-center h-full w-full"}>
                <Card className={"py-5 px-7 w-full max-w-[450px] md:mx-auto"}>

                    <CardHeader className={"text-center"}>
                        <p className={"text-3xl text-center w-full font-bold text-black"}>{heading}</p>
                    </CardHeader>
                    <div className={"text-center text-sm text-black"}>
                        <p className={""}>{subheading}</p>
                    </div>

                    {providers.map(provider => (
                        <SocialLoginButton
                            key={provider}
                            provider={provider}
                            icon={`/social-icons/${provider}.svg`}
                            callbackUrl={callbackUrl}
                        />
                    ))}


                    <Spacer y={3} />
                    <Divider />
                    <Spacer y={3} />

                    <p className={""}>Email address:</p>
                    <Spacer y={2} />

                    <form className={"auth-form"}>
                        {/* <Input
                            fullWidth
                            isClearable
                            label="Email"
                            type="email"
                            variant="bordered"
                            className={"mb-3"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        /> */}

                        <Input
                            fullWidth
                            isClearable
                            label="Username"
                            type="username"
                            variant="bordered"
                            className={"mb-3"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                        />

                        <Spacer y={1} />


                        <Input
                            fullWidth
                            isClearable
                            label="Password"
                            type="password"
                            variant="bordered"
                            className={"mb-3"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <Spacer y={1} />

                        {error?.valueOf() && errorCodes && (
                            <div className="flex flex-wrap gap-4">
                                <Tooltip key="error" color="danger" content={errorCodes[error]} className="capitalize">
                                    <Button variant="flat" color="danger" className="capitalize">
                                        {error}
                                    </Button>
                                </Tooltip>
                            </div>
                        )}
                        <Spacer y={0.5} />

                        <CustomButton provider={SocialProviderEnum.Email} buttonColor="bg-black type=" onSubmit={handleSubmit} />

                    </form>
                    <Spacer y={5} />

                    <SignPolicy />
                    <Spacer y={1} />
                </Card>
            </div>
        </>
    )
}




export default AuthForm;


