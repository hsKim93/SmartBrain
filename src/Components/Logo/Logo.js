import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilty className="tilty br2 shadow-2" scale={1.05} glare>
                <div className="inner pa3">
                    <img className="pt2" src={brain} alt="brain">
                    </img>
                </div>
            </Tilty>
        </div>
    );
}

export default Logo;