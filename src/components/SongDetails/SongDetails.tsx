import * as React from 'react';
import { connect } from 'react-redux';
import { Song as ISong} from '../../interfaces/interfaces';
import * as _ from 'lodash';

interface Props {
    selectedSong: ISong;
}

const SongDetailsBody: React.FC<Props> = (props: Props): JSX.Element => {
    const { selectedSong } = props;
    return (
        <>
            {!_.isNil(selectedSong) && <>
                <div>{selectedSong.title}</div>
                <div>{selectedSong.duration}</div>
            </>}
        </>
    )
}

const mapStateToProps = (state: Props) => {
    return { selectedSong: state.selectedSong }
}

export const SongDetails = connect(mapStateToProps)(SongDetailsBody);