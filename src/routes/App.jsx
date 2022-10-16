import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import Recovery from "../containers/Recovery";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout >
                <Routes>
                    <Route patch="/home" element={<Home />} />
                    <Route patch="/login" element={<Login />} />
                    <Route patch="/recovery" element={<Recovery />} />
                    <Route patch="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;