import React from 'react';
import {SPRITE_SIZE} from '../../config/constants';
import './style.css';

import {connect} from 'react-redux';

const getTileSprite = (type) => {
    switch(type){
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
        default:
            return 'grass'
    }
}

const MapRow = (props) => {
    return (
        <div className="row">
            {props.tiles.map( tile => <MapTile tile={tile} />)}
        </div>
    )
}

const MapTile = (props) => {
    return (
        <div 
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: SPRITE_SIZE,
            width: SPRITE_SIZE
        }}
        >
        </div>
    )
}
const Map = (props) => {
    return (
        <div
            style={{
                width: "800px",
                height: "400px",
                backgroundColor: 'green',
                border: '4px solid white',
                margin: '10px auto'
            }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}

function mapStateToProps(state){
    console.log({...state.map});
    return {
        ...state.map
    }
}


export default connect(mapStateToProps)(Map);