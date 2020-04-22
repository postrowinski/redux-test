import * as React from 'react';
import { Song as ISong, SelectSongAction} from '../../interfaces/interfaces';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { selectSong } from '../../actions/index';

interface Props {
    song: ISong;
    key: number;
    selectSong: (song: ISong) => SelectSongAction;
}

const SongBody: React.FC<Props> = (props: Props): JSX.Element => {
    const { key, song, selectSong } = props;
    return (
        <li key={key} className='song__item'>
            <span>
                {song.title}
            </span>
            <Button type='primary' onClick={() => selectSong(song)}>
                Select
            </Button>
        </li>
    );
}

export const Song = connect(undefined, {selectSong})(SongBody);