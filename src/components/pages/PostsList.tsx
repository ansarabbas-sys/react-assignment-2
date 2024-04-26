import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postData from "../../Posts.json";

export default function PostsList(){
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [posts, setPosts] = useState<any[]>(postData);

    const handleSubmit = ()=>{
        const newId = Date.now();
        const newPost={
            id: newId,
            postTitle: title,
            postDetail: detail,
        };
        setPosts([...posts, newPost]);
        setTitle("");
        setDetail("");
    }
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('posts-data') ?? '{}');
        if(items.length > postData.length){
            setPosts(items);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('posts-data', JSON.stringify(posts));
    },[posts]);

    return(
        <>
            <h2 className="text-2xl font-bold list-disc">List of Posts</h2>
            <ul>
                {
                    posts.map((item, ind)=>{
                        return(
                            <li key={ind}><Link to={`/posts/${item.id}`} state={{title: item.postTitle, detail: item.postDetail}}>  {item.postTitle}</Link></li>
                        )
                    })
                }
            </ul>

            <h3 className="text-2xl font-bold ">Add New Post</h3>

            <form className="flex flex-col gap-5">
                <label className="flex flex-col mb-3">Enter Post Title:
                    <input type="text" value={title} name="post-title" onChange={(e) => setTitle(e.target.value)} className="border border-slate-700 max-w-[300px]"/>
                </label>
                <label  className="flex flex-col mb-3">Enter Post Detail:
                    <textarea  name="post-detail" value={detail} onChange={(e) => setDetail(e.target.value)} className="border border-slate-700 max-w-[300px]"/>
                </label>
                <button type="button" onClick={handleSubmit} className="font-lg p-2 w-[100px] rounded-md bg-indigo-600 text-white">Submit</button>
            </form>
        </>
    )
}