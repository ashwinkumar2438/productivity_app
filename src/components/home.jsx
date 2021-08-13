import {useTimer} from '@src/hooks/useTimer';
import {useRef} from 'react';
import {viewTime} from '@src/utils/helpers';

const rest='RESTING', prod='PRODUCTIVE';

const Home=()=>{

    const [prodTime,prodPlay,prodPause]=useTimer();
    const [restTime,restPlay,restPause]=useTimer();

    const state=useRef();

    const playPause=()=>{
        state.current=state.current===prod?rest:prod;


        return ( (state.current===prod) && ( prodPlay(), restPause() ) ) 
                || 
               ( (state.current===rest) && ( prodPause(), restPlay() ) );
    }

    return (
        <div>
            <h1>This is Home!</h1>
            <div>{viewTime(prodTime)}</div>
            <div>{viewTime(restTime)}</div>
            <button onClick={playPause}>play</button>
        </div>
    )


}

export {Home};