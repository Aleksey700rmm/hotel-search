import React from "react";
import Autorization from "./components/pages/autorization/Autorization";
import MainPage from "./components/pages/mainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Autorization />} />
                    <Route path="/main" element={<MainPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
