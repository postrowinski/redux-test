import * as React from "react";
import { SongList } from '../../components/SingList/SongList';
import { SongDetails } from '../../components/SongDetails/SongDetails';
import { Row, Col } from "antd";

const Home: React.FC<{}> = (): JSX.Element => {
    return (
        <Row gutter={24}>
            <Col span={12}>
                <SongList />
            </Col>
            <Col span={12}>
                <SongDetails />
            </Col>
        </Row>
    );
} 

export default Home;
