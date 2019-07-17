import React from 'react';

const CarCard = props => {
console.log({props})
    return (
        <div>
            <p>{props.brand} {props.color}</p>
        </div>
    )

}

export default CarCard;