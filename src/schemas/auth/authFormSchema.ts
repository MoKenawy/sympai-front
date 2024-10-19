import AuthErrorMessages from "./errors/errorMessages";
import { SocialProviderEnum } from "./socialProviders";

type AuthFormSchema = {
    heading?: string,
    subheading?: string,
    providers: SocialProviderEnum[],
    errorCodes?: AuthErrorMessages,
}

export default AuthFormSchema;