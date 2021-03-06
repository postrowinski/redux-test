import 'antd/dist/antd.less';
import 'babel-polyfill';
import * as React from "react";
import { hot } from 'react-hot-loader';
import './assets/scss/app.scss';
import Navigation from './components/Navigation/Navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

const App: React.FC<{}> = (): JSX.Element => { 
    return (
        <Provider store={createStore(reducers)}>
            <div style={{maxWidth: '1200px', margin: 'auto'}}>
                <Navigation />
            </div>
        </Provider>
    )
};

export default hot(module)(App);
