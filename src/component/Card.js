import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../UserDataContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Card.css';  

const Card = () => {
    const { userData } = useContext(UserDataContext);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    if (!userData || !userData.imageUrl) {
        return (
            <div className="container mt-5 text-center">
                <p>No data available. Please go back and select an image.</p>
                <button onClick={handleBack} className="btn btn-secondary mt-3">Back</button>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-lg overflow-hidden bg-gradient-primary">
                        {userData.imageUrl && (
                            <img src={userData.imageUrl} className="card-img-top" alt={userData.topic} />
                        )}
                        <div className="card-body text-center text-white">
                            <h5 className="card-title">Profile Snapshot</h5>
                            <p className="card-text"><strong>Name:</strong> {userData.name}</p>
                            <p className="card-text"><strong>Surname:</strong> {userData.surname}</p>
                            <p className="card-text"><strong>Topic:</strong> {userData.topic}</p>
                        </div>
                        <div className="card-footer text-center">
                            <button onClick={handleBack} className="btn btn-secondary mt-3">Back to Main Form</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
