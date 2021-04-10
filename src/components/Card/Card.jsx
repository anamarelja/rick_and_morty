import React, { Component } from 'react';
import './Card.scss'

const Card = (props) => {
    
        return ( 
                 <div className="User">
                    <img src={props.characterImage} alt="profile_picture"/>
                    <p>{props.characterName}</p>
                    <button className="myButton" onClick={()=>{
                        props.setCharacter(props.charID)
                    }}>Like</button>
                </div>           
         );
    
}
 
export default Card;