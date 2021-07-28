import React from 'react';

const FaceRecognition = ({ imgURL }) => {
    return (
        <div className="center">
            <img src={imgURL} alt='face'></img>
        </div>
    );
}

export default FaceRecognition;