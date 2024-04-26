import { Outlet, useNavigate } from "react-router-dom";

export default function PostsList(){
    const navigate =  useNavigate()
    const backToHome = () =>{
        navigate('/');
    }
    return(
        <section className="main-content mx-auto max-w-7xl pt-10 mb-8 flex flex-col gap-5">
            <button onClick={backToHome} className="button mb-8 font-lg p-3 w-[150px] rounded-md bg-indigo-600  text-white">Back to Home</button>
            <h1 className="text-center text-6xl">Posts</h1>
            <Outlet />
        </section>
    )
}