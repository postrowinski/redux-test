import * as React from "react";
import { SongList } from '../../components/SingList/SongList';

const Home: React.FC<{}> = (): JSX.Element => {
    return (
        <div>
            <SongList />
        </div>
    );
} 

export default Home;
