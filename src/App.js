import { useState } from "react";
import Counterpage from "./Components/pages/Counterpage/Counterpage";
import InterstPage from "./Components/pages/InterestPage/InterestPage";
import LoginPage from "./Components/pages/LoginPage/LoginPage";
import PokemonPage from "./Components/pages/PokemonPage/PokemonPage";
// import PokemonPage1 from "./Components/pages/PostPage/PostPage";
import WelcomePage from "./Components/pages/WelcomePage/WelcomePage";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import PostPage from "./Components/pages/PostPage/PostPage";
import PostDetailPage from "./Components/pages/PostDetailPage/PostDetailPage";
import HomePage from "./Components/pages/HomePage/HomePage";
import ProfilePage from "./Components/pages/ProfilePage/ProfilePage";


const App = () => {

    const [pageSelected, setPageSelected] = useState('');
    console.log("page selected = ", pageSelected);
    const handleChange = (evt) => {
        console.log("Change select");
        //setPageSelected()
        setPageSelected(evt.target.value);
    };
    return (

        <div>
            <BrowserRouter>
                <ul style={{ display: 'flex', listStyle : 'none' }}>
                    {/* <li style={{ margin: 20 }}><Link to="/">Home</Link></li> */}
                    {/* <li style={{ margin: 20 }}><Link to="/pokemon">Pokemon</Link></li> */}
                    {/* <li style={{ margin: 20 }}><Link to="/interest">Interest</Link></li> */}
                    <li style={{ margin: 20 }}><Link to="/home">Home</Link></li>
                    <li style={{ margin: 20 }}><Link to="/posts">Posts</Link></li>
                    <li style={{ margin: 20 }}><Link to="/profile">Profile</Link></li>
                    <li style={{ margin: 20 }}><Link to="/login">Login</Link></li>
                </ul>
                <Routes>
                    {/* <Route path="/" element={<WelcomePage />}> </Route> */}
                    {/* <Route path="/pokemon" element={<PokemonPage />}> </Route> */}
                    {/* <Route path="/pokemon1" element={<PokemonPage1 />}> </Route> */}
                    {/* <Route path="/interest" element={<InterstPage />}> </Route> */}
                    <Route path="/login" element={<LoginPage />}> </Route>
                    <Route path="/posts" element={<PostPage />}> </Route>
                    <Route path="/post/:id" element={<PostDetailPage />}> </Route>
                    <Route path="/home" element={<HomePage />}> </Route>
                    <Route path="/profile" element={<ProfilePage />}> </Route>
                </Routes>
            </BrowserRouter>
            {/* <select value={ pageSelected } onChange={ handleChange }>
                <option value="welcome">Show Welcome page</option>
                <option value="counter">Show Counter page</option>
                <option value="interest">Show Interest page</option>
                <option value="pokemon">Show Pokemon page</option>
                <option value="pokemon1">Show Pokemon page 1</option>
                <option value="values">Show Login Page</option>

            </select> */}
            {pageSelected === "welcome" && < WelcomePage />}
            {pageSelected === "counter" && <Counterpage />}
            {pageSelected === "interest" && <InterstPage />}
            {pageSelected === "pokemon" && <PokemonPage />}
            {pageSelected === "pokemon1" && <PostPage />}
            {pageSelected === "values" && <LoginPage />}


        </div>

    )
};

export default App;