import { combineReducers } from 'redux';
import * as I from '../interfaces/interfaces';
import { SELECT_SONG_TYPE, INCREMENT, DECREMENT } from '../interfaces/types';

const songsReducer = (): I.Song[] => {
    return [
        { title: 'Dont speak', duration: '4:05'},
        { title: 'Makarena', duration: '4:02'},
        { title: 'All Stars', duration: '3:15'},
        { title: 'New song', duration: '3:15'}
    ]
}

const selectedSongReducer = (selectedSong: I.Song = null, action: I.SelectSongAction) => {
    switch(action.type) { 
        case SELECT_SONG_TYPE: {
            return action.payload
        }
        default: {
            return selectedSong
        };
    }
}

const counterReducer = (count: number = 0, action: I.CounterAction) => {
    console.log(count);
    switch(action.type) {
        case INCREMENT: {
            return count + 1;
        }
        case DECREMENT: {
            return count <= 0 ? 0 : count - 1;
        }
        default: count;
    }
    return 0;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    counter: counterReducer
});