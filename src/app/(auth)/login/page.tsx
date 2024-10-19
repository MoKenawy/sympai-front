// app/login/page.tsx
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import LoginPage from "@/components/Login/LoginPage";
import { cookies } from 'next/headers';

function IsLogged(){
    const cookieStore = cookies();
    const token = cookieStore.get('access_token');
    if(token){
        return true;
    }
    return false;
}


async function Login () {
    if(await IsLogged()){
        revalidatePath('/'); // Update cached posts
        redirect('/'); // Navigate to the new post page  }        
    }

    return (
        <LoginPage />
    );
};

export default Login;
