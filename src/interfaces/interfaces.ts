export interface Song {
    title: string;
    duration: string;
}

export interface SelectSongAction {
    type: string;
    payload: Song;
}