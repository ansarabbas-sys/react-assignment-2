import {Route, Routes} from 'react-router-dom';
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import NotFound from '../components/pages/NotFound';
import Posts from '../components/pages/Posts';
import PostDetail from '../components/pages/PostDetail';
import PostsList from '../components/pages/PostsList';
export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />}>
                <Route index element={<PostsList />} />
                <Route path=":id" element={<PostDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}