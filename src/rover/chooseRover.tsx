import React from 'react';
import './chooseRover.scss';
import { rovers } from './marsRover';

export function ChooseRover(props: ChooseRoverProps) {
    return (
        <div className="chooseRover">
            <h2>Choose your Rover</h2>
            <div className = "allRovers">
                {rovers.map(roverObject => <RoverCard key={roverObject.name} roverName={roverObject.name} roverImage='/images/curioisity_rover.jpg' onRoverSelected={props.setRover} selectedRover={props.rover}/>)}   
            </div>
        </div>
    )
}

interface ChooseRoverProps {
    rover: string;
    setRover: (rover: string) => void;   
}

interface RoverCardProps {
    onRoverSelected: (roverName: string) => void;
    selectedRover: string;
    roverName: string;
    roverImage: string;
}

function RoverCard(props: RoverCardProps) {
    function getClassName() {
        if (props.roverName === props.selectedRover) {
            return "roverOptions selected";
        }
        return "roverOptions";
    }

    return (
        <div className={getClassName()} onClick={() => props.onRoverSelected(props.roverName)}>
            <img className="roverImage" src={props.roverImage} alt="rover"></img>
            <h3>{props.roverName}</h3>
        </div>
    );
}
