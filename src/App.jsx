import { Image } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import HomePage from "./components/HomePage/HomePage";
import Manage from "./components/Manage/Manage.jsx";

const App = () => {
    return (
        <>
            <Image
                src="src\resources\background.svg"
                objectFit={"cover"}
                zIndex={-3}
                position={"absolute"}
                style={{ width: "100vw" }}
            ></Image>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/manage" element={<Manage />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
