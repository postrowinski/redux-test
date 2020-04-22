import * as React from 'react';
import { connect } from 'react-redux';
import { Song as ISong } from '../../interfaces/interfaces';
import { Song } from '../Song/Song';

interface Props {
    songs: ISong[];
}

const SongListBody: React.FC<Props> = (props: Props): JSX.Element => {
    const { songs } = props;
    return (
        <ul className='song__list'>
            {songs.map((song: ISong, index: number) => <Song song={song} key={index} />)}
        </ul>
    )
}

const mapStateToProps = (state: Props): Props => {
    return { songs: state.songs }
}

export const SongList = connect(mapStateToProps)(SongListBody);
