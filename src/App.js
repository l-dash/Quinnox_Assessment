import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./component/Form";
import ImageViewer from "./component/ImageViewer";
import Card from "./component/Card";

const App = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    topic: "",
    imageUrl: "",
  });

  const handleUserDataChange = (data) => {
    console.log("Updating userData in App:", data);
    setUserData(prevData => ({ ...prevData, ...data }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form onSubmit={handleUserDataChange} />} />
        <Route path="/image-viewer" element={<ImageViewer userData={userData} onAccept={handleUserDataChange} />} />
        <Route path="/card" element={<Card userData={userData} />} />
      </Routes>
    </Router>
  );
};

export default App;
