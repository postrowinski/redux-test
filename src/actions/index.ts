import * as I from '../interfaces/interfaces';
import { SELECT_SONG_TYPE } from '../interfaces/types';

export const selectSong = (song: I.Song): I.SelectSongAction => {
    return {
        type: SELECT_SONG_TYPE,
        payload: song
    }
}