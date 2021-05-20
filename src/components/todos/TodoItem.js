import React from 'react';

import { CustomBtn } from '../../ui/customs/CustomBtn';

export const TodoItem = ({task, index, dispatch}) => {

    const handleDeleteTask = () => {

        const deleteTask = {
            type: 'delete',
            payload: task.id
        }

        dispatch( deleteTask );
    }

    return (
        <li
            className="home__todo-item list-group-item"
        >
            <div className="home__todo-item-content alignX pushAside">
                <p className="home__todo-desc">
                    { index + 1 }. { task.desc }    
                </p>    
                <CustomBtn
                    btnTitle={ 'Borrar' }
                    classes={ 'btn-delete btnNormal' }
                    onClick={ handleDeleteTask }
                />
            </div>
        </li>
    )
}
