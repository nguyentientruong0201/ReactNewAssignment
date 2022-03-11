// import { useState } from "react";
// import Counterpage from "./Components/pages/Counterpage/Counterpage";
// import InterstPage from "./Components/pages/InterestPage/InterestPage";
import LoginPage from "./Components/pages/LoginPage/LoginPage";
// import PokemonPage from "./Components/pages/PokemonPage/PokemonPage";
// import PokemonPage1 from "./Components/pages/PostPage/PostPage";
// import WelcomePage from "./Components/pages/WelcomePage/WelcomePage";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import PostPage from "./Components/pages/PostPage/PostPage";
import PostDetailPage from "./Components/pages/PostDetailPage/PostDetailPage";
import HomePage from "./Components/pages/HomePage/HomePage";
import ProfilePage from "./Components/pages/ProfilePage/ProfilePage";
import { AppBar, IconButton, Toolbar, Typography, Box, Button } from "@mui/material";
// import { red, yellow } from "@mui/material/colors";




const App = () => {
    const token = localStorage.getItem('token');
    // const navigate = useNavigate();

    function onLogoutClicked() {
        localStorage.setItem('token', '');
        localStorage.setItem('userId', '');
        window.location.reload();
        // navigate('/');
    }

    // const [pageSelected, setPageSelected] = useState('');
    // console.log("page selected = ", pageSelected);
    // const handleChange = (evt) => {
    //     console.log("Change select");
    //     //setPageSelected()
    //     setPageSelected(evt.target.value);
    // };
    return (

        <div>
            <BrowserRouter>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                {/* <MenuIcon /> */}
                            </IconButton>

                            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                                <Link style={{marginRight: 20, color : "hotpink", textAlign: "center", textDecoration: 'none'  }} to="/home">Home</Link>
                                <Link style={{marginRight: 20, color : "hotpink", textAlign: "center", textDecoration: 'none'  }} to="/posts">Posts</Link>
                                <Link style={{marginRight: 20, color : "hotpink", textAlign: "center", textDecoration: 'none'  }} to="/profile">Profile</Link>
                                {!token ? (
                                    <Link style={{marginRight: 20, color : "hotpink", textAlign: "center", textDecoration: 'none'  }} to="/login">Login
                                    </Link>
        
                                ) : (
                                    <Button onClick={onLogoutClicked} style={{ margin: 20, color: 'red' }}>Logout</Button>
                                )}    
                            </Typography>
                         
                        </Toolbar>
                    </AppBar>
                </Box>
                {/* <ul style={{ display: 'flex', listStyle : 'none' }}>
                    {/* <li style={{ margin: 20 }}><Link to="/">Home</Link></li> */}
                {/* <li style={{ margin: 20 }}><Link to="/pokemon">Pokemon</Link></li> */}
                {/* <li style={{ margin: 20 }}><Link to="/interest">Interest</Link></li> */}
                {/* <li style={{ margin: 20 }}><Link to="/home">Home</Link></li>
                <li style={{ margin: 20 }}><Link to="/posts">Posts</Link></li>
                <li style={{ margin: 20 }}><Link to="/profile">Profile</Link></li>
                {!token ? (
                    <li style={{ margin: 20 }}><Link to="/login">Login
                    </Link>
                    </li>
                ) : (
                    <button onClick={onLogoutClicked} style={{ margin: 20 }}>Logout</button>
                )}
                // </ul> */ }
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
            {/* {pageSelected === "welcome" && < WelcomePage />} */}
            {/* {pageSelected === "counter" && <Counterpage />} */}
            {/* {pageSelected === "interest" && <InterstPage />} */}
            {/* {pageSelected === "pokemon" && <PokemonPage />} */}
            {/* {pageSelected === "pokemon1" && <PostPage />} */}
            {/* {pageSelected === "values" && <LoginPage />} */}


        </div >

    )
};

export default App;