import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import {increment, decrement} from '../../actions/index'

interface Props {
    counter: number;
    increment: () => void;
    decrement: () => void;
}

const CounterBody: React.FC<Props> = (props: Props) => {
    const { counter, decrement, increment } = props;
    return (
        <>
            <div>
                {counter}
            </div>
            <Button type='primary' onClick={increment}>Increment</Button>
            <Button type='danger' onClick={decrement}>Decrement</Button>
        </>
    )
}

const mapStateToProps = (state: Props) => {
    return { counter: state.counter }
}

export const Counter = connect(mapStateToProps, {
    increment, 
    decrement
})(CounterBody);