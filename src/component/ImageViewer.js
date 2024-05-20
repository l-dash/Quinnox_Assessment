import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserDataContext from "../UserDataContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Spinner.css"; 

const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

let firstSearch = 0;

const ImageViewer = () => {
    const { userData, setUserData } = useContext(UserDataContext);
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData || !userData.topic) {
            navigate("/");
            return;
        }
        fetchImage(userData.topic, firstSearch);
    }, [userData, navigate]);

    const fetchImage = async (query, searchIndex) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.hits.length > 0) {
                setImageUrl(data.hits[searchIndex].webformatURL);
            } else {
                throw new Error('No images found');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    const handleReject = () => {
        firstSearch++;
        fetchImage(userData.topic, firstSearch);
    };

    const handleAccept = () => {
        setUserData({ ...userData, imageUrl });
        navigate("/card");
    };

    const handleBack = () => {
        navigate("/"); 
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                        {loading ? (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : error ? (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        ) : (
                            imageUrl && <img src={imageUrl} alt={userData.topic} className="img-fluid rounded mb-3" />
                        )}
                        <div>
                            <button onClick={handleAccept} className="btn btn-success me-2" disabled={loading || error}>Accept</button>
                            <button onClick={handleReject} className="btn btn-danger" disabled={loading}>Reject</button>
                            <button onClick={handleBack} className="btn btn-primary ms-2">Back</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageViewer;
