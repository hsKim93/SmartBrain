import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imgURL, box }) => {
    return (
        <div className="center ma mv2">
            <div className= 'absolute'>
                <img id='inputImage' src={imgURL} alt='' width='500px' heigth='auto'></img>
                <div
                    className='bounding-box'
                    style={{ top: box.topRow, bottom: box.bottomRow, left: box.leftCol, right: box.rightCol }}>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;