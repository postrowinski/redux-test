import * as I from '../interfaces/interfaces';
import { SELECT_SONG_TYPE, INCREMENT, DECREMENT } from '../interfaces/types';

export const selectSong = (song: I.Song): I.SelectSongAction => {
    return {
        type: SELECT_SONG_TYPE,
        payload: song
    }
}

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}