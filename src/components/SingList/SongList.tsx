import * as React from 'react';
import { connect } from 'react-redux';
import { Song } from '../../interfaces/interfaces';

interface Props {
    songs: Song[];
}

const SongListBody: React.FC<Props> = (props: Props): JSX.Element => {
    console.log(props.songs);
    return (
        <div>
            test
        </div>
    )
}

const mapStateToProps = (state: Props) => {
    return { songs: state.songs }
}

export const SongList = connect(mapStateToProps)(SongListBody);
