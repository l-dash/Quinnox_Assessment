import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const PIXABAY_API_KEY = '43954043-5c92aa250c21d0ef50e305111';

let firstSearch = 0;

const ImageViewer = ({ userData, onAccept }) => {
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchImage(userData.topic, firstSearch);
    }, [userData.topic]);

    const fetchImage = async (query, searchIndex) => {
        try {
            const response = await fetch(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(query)}&image_type=photo`);
            const data = await response.json();
            if (data.hits.length > 0) {
                setImageUrl(data.hits[searchIndex].webformatURL);
            }
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    const handleReject = () => {
        firstSearch++;
        fetchImage(userData.topic, firstSearch);
    };

    const handleAccept = () => {
        onAccept({ ...userData, imageUrl });
        navigate("/card");
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center">
                        {imageUrl && <img src={imageUrl} alt={userData.topic} className="img-fluid rounded mb-3" />}
                        <div>
                            <button onClick={handleAccept} className="btn btn-success me-2">Accept</button>
                            <button onClick={handleReject} className="btn btn-danger">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageViewer;
