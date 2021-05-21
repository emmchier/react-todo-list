import React from 'react';

import { CustomBtn } from '../../ui/customs/CustomBtn';
import { actionTypes } from '../../utils/types';

export const TodoItem = ({task, index, dispatch}) => {

    const handleDeleteTask = () => {

        dispatch({
            type: actionTypes.deleteAction,
            payload: task.id
        });
    }

    const handleCheckedTask = () => {

        dispatch({
            type: actionTypes.checkedAction,
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
