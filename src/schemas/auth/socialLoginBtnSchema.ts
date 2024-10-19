import { SocialProviderEnum } from "./socialProviders";
export type SocialLoginButtonParams = {
    provider: SocialProviderEnum;
    icon?: string;
    buttonColor?: string;
    textColor?: string;
    callbackUrl?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

