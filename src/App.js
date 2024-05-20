import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDataProvider } from "./UserDataContext";
import Form from "../src/component/Form";
import ImageViewer from "../src/component/ImageViewer";
import Card from "../src/component/Card";

function App() {
    return (
        <UserDataProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/image-viewer" element={<ImageViewer />} />
                    <Route path="/card" element={<Card />} />
                </Routes>
            </Router>
        </UserDataProvider>
    );
}

export default App;
