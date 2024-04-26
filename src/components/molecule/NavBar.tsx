import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <ul className="flex g:mt-0 lg:flex-shrink-0 justify-center  gap-5 text-lg">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    )
}