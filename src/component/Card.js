import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Card.css';  // Ensure this path is correct

const Card = ({ userData }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
