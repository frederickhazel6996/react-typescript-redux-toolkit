import React, { useState } from 'react';
import './index.scss';

interface propsInterface {
    todo: string;
    time?: string;
    id: number;
    done: boolean;
}
const index: React.FC<propsInterface> = ({ todo, time, done }) => {
    return (
        <div className="todo__container m-2">
            <h1>{todo}</h1>
            <h1>{time}</h1>
            {done ? <h1>Yes</h1> : <h1>No</h1>}
        </div>
    );
};

export default index;
