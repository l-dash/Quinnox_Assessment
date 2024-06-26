import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../UserDataContext";

const Form = () => {
    const { setUserData } = useContext(UserDataContext);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [topic, setTopic] = useState("Travel");
    const [otherTopic, setOtherTopic] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalTopic = topic === "Other" ? otherTopic : topic;
        setUserData({ name, surname, topic: finalTopic });
        navigate("/image-viewer");
    };

    const handleClear = () => {
        setName("");
        setSurname("");
        setTopic("Travel");
        setOtherTopic("");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Surname:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="topic" className="form-label">Preferred Topic:</label>
                            <select
                                className="form-select"
                                id="topic"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            >
                                <option value="Travel">Travel</option>
                                <option value="Cars">Cars</option>
                                <option value="Wildlife">Wildlife</option>
                                <option value="Technology">Technology</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        {topic === "Other" && (
                            <div className="mb-3">
                                <label htmlFor="otherTopic" className="form-label">Other Topic:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="otherTopic"
                                    value={otherTopic}
                                    onChange={(e) => setOtherTopic(e.target.value)}
                                    required
                                />
                            </div>
                        )}
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary me-2">Submit</button>
                            <button type="button" className="btn btn-secondary" onClick={handleClear}>Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
