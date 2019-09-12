import React from 'react';
import {connect} from 'react-redux'
import * as walkSprite from './player_walk.png'
import handleMovement from './movement';

const Player = (props) => {
    console.log(props);
    return (
        <div 
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url(${walkSprite})`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px'
            }}
        />
    )
}

function mapStateToProps(state){
    // console.log(...state.player);
    return {
        // ...state.player
        position: state.player.position,
        // hairColor: state.player.hairColor
    }
}

export default connect(mapStateToProps)(handleMovement(Player));