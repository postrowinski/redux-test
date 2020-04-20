import 'antd/dist/antd.less';
import 'babel-polyfill';
import * as React from "react";
import { hot } from 'react-hot-loader';
import './assets/scss/variables.scss';
import Navigation from './components/Navigation/Navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';

const App: React.FC<{}> = (): JSX.Element => { 
    return (
        <Provider store={createStore(reducers)}>
            <Navigation />
        </Provider>
    )
};

export default hot(module)(App);
