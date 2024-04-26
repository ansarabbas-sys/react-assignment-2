import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function PostDetail(){
    const {id} = useParams();
    let {state} = useLocation();

    const navigate =  useNavigate()
    const backToPosts = () =>{
        navigate('/posts');
    }
    return(
        <>
            <h3 className="text-6xl">This is post# {id}</h3>
            <p className="font-[20px] font-bold">{state.title}</p>
            <p className="font-[20px]">{state.detail}</p>
            <button onClick={backToPosts} className="button mb-8 font-lg p-3 w-[200px] rounded-md bg-gray-600  text-white">Back to Post Lists</button>
        </>
    )
}