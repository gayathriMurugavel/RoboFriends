import React from 'react';
import 'tachyons';
const Card = (props) => {
    return (
        <div className="bg-light-green dib br3 pa1 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200" `}/>
            <div>
                <h2 className="txt">{props.name}</h2>
                <p className="txt">{props.email}</p>
            </div>
        </div>
    );
}
export default Card;
