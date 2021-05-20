import React from 'react';

import { CustomBtn } from '../../ui/customs/CustomBtn';

export const TodoItem = ({task, index, dispatch}) => {

    const handleDeleteTask = () => {

        dispatch({
            type: 'delete',
            payload: task.id
        });
    }

    const handleCheckedTask = () => {

        dispatch({
            type: 'checked',
            payload: task.id
        });
    }

    return (
        <li
            className="home__todo-item list-group-item"
        >
            <div className="home__todo-item-content alignX pushAside">
                <p 
                    className={ `home__todo-desc ${ task.done && 'checkedTask' }` }
                    onClick={ handleCheckedTask }>
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
