import React from 'react';

import { CustomBtn } from '../../ui/customs/CustomBtn';

export const TodoItem = ({task, index}) => {

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
                />
            </div>
        </li>
    )
}
