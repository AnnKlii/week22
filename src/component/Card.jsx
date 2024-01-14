import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="card-title">{props.name}</h2>
            </div>
            <div className="card-body">
                <p>Вселенная: {props.universe}</p>
                <p>Альтер эго: {props.alterego}</p>
                <p>Род деятельности: {props.occupation}</p>
                <p>Друзья: {props.friends}</p>
                <p>Суперсилы: {props.superpowers}</p>
                <p>Информация: {props.info}</p>
            </div>
            <img src={props.url} alt={props.name} />
        </div>
    );
}

export default Card