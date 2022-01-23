import React, { useEffect } from 'react';
import { getTodos } from '../store/actions/todo-actions';
import { AppStateType } from '../config/create-store';
import { useAppDispatch, useAppSelector } from '../config/hooks';
import RPT from 'prop-types';
import Todos from './todos';
import './index.scss';

interface todosInterface {
    todo: string;
    time?: string;
    id: number;
    done: boolean;
}

const Index: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTodos());
    }, []);

    const todo = useAppSelector((state: AppStateType) => state.todos.todos);

    const todoList: JSX.Element[] = todo.map((todos: todosInterface) => (
        <Todos todo={todos.todo} done={todos.done} id={todos.id} time={todos.time} key={todos.id} />
    ));
    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="todobox mt-3">{todoList}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.propTypes = {
    todos: RPT.array,
    fetchTodo: RPT.func
};

export default Index;
