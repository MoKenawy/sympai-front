import Link from "next/link"

function SignPolicy() {
    return (
        <div className={"text-center text-sm text-gray-600 mb-2"}>
            <p className={"mb-2"}>
                This site is protected by reCAPTCHA Enterprise and the Google
                <br className={"md:hidden"} />
                <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    <strong style={{ fontWeight: "bold", color: "black" }}> Privacy Policy </strong>
                </Link>{" "}
                and
                <br className={"md:hidden"} />
                <Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                    <strong style={{ fontWeight: "bold", color: "black" }}> Terms of Service </strong>
                </Link>{" "}
                apply.
            </p>
            <p className={"mb-4"}>
                By continuing, you agree to the
                <br className={"md:hidden"} />
                <Link href="https://adplist.org/terms" target="_blank" rel="noopener noreferrer">
                    <strong style={{ fontWeight: "bold", color: "black" }}> Terms of use </strong>
                </Link>{" "}
                ,
                <br className={"md:hidden"} />
                <Link href="https://adplist.org/privacy" target="_blank" rel="noopener noreferrer">
                    <strong style={{ fontWeight: "bold", color: "black" }}> Privacy Policy </strong>
                </Link>{" "}
                and
                <br className={"md:hidden"} />
                <Link href="https://adplist.org/community-standards" target="_blank" rel="noopener noreferrer">
                    <strong style={{ fontWeight: "bold", color: "black" }}> Community Standards </strong>
                </Link>{" "}
                of Alm Al Quran.
            </p>
        </div>
    );
}
export default SignPolicy;

