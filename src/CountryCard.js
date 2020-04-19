import React from "react";

function CountryCard(props) {
    return (
            <div className="col col-md-3">
                <div className="card" onClick={() => props.handleClick(props.id)} >
                    <img class="card-img-top" alt={props.name} src={props.image} />
                    <div className="card-body">
                        <h5 class="card-title">Country: {props.name}</h5>
                        <h6 class="card-title">Capital: {props.capital}</h6>
                    </div>
                </div >
            </div>
    )
}

export default CountryCard;