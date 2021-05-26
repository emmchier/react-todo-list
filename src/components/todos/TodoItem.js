import React, { useState } from 'react';
import { useForm } from 'hooks/useForm';
import { actionTypes } from 'reducers/typesReducer';
import { CustomBtn } from 'ui/customs/CustomBtn';
import { TodoForm } from './TodoForm';
import { useMediaQueries } from 'hooks/useMediaQueries';

export const TodoItem = ({ task, index, dispatch }) => {

    const [{ desc }, handleInputChange, reset] = useForm({ desc: '' });

    const [editVisible, setEditVisible] = useState(false);

    const {isMobile} = useMediaQueries();

    const handleDeleteTask = () => {
        dispatch({
            type: actionTypes.deleteTask,
            payload: task.id
        });
    }

    const handleEditTask = (e) => {
        e.preventDefault();
        if (desc.trim().length <= 0) { return; }
        dispatch({
            type: actionTypes.editTask,
            payload: {
                id: task.id,
                desc: desc
            }
        });
        reset();
        setEditVisible(!editVisible);
    }

    const handleCompleteTask = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            dispatch({
                type: actionTypes.completeTask,
                payload: {
                    id: task.id,
                    checked: true
                }
            });
        } else {
            dispatch({
                type: actionTypes.completeTask,
                payload: {
                    id: task.id,
                    checked: false
                }
            });
        }
    }

    return (
        <li
            className="
                todoItem__todo-item 
                list-group-item
                animate__animated 
                animate__fadeIn 
                animate__faster
                ">
            <div className="todoItem__todo-item-content alignX pushAside">
                <div className="todoItem__item-name-container alignX">

                         <label>
                            <input 
                                type="checkbox" 
                                className="indeterminate"
                                checked={task.checked}
                                onChange={(e) => handleCompleteTask(e)}
                                />
                            <span></span>
                        </label>
                 
                    <p
                        className={`todoItem__todo-desc ${task.done && 'checkedTask'}`}
                        onClick={(e) => handleCompleteTask(e)}>
                        {task.desc}
                    </p>
                </div>
                <div className="todoItem__item-actions-container alignX">
                    <CustomBtn
                        classes={isMobile ? 'btn-edit btnFAB' : 'btn-edit btnOutline'}
                        btnTitle={isMobile ? '' : 'Editar'}
                        onClick={() => setEditVisible(!editVisible)}
                        isIconLeftVisible={true}
                        btnIcon={'edit'}
                    />
                    <CustomBtn
                        classes={isMobile ? 'btn-delete btnFAB' : 'btn-delete btnOutline'}
                        btnTitle={isMobile ? '' : 'Eliminar'}
                        onClick={handleDeleteTask}
                        isIconLeftVisible={true}
                        btnIcon={'delete'}
                    />
                </div>

            </div>
            {
                editVisible &&
                <div 
                    className="
                    animate__animated 
                    animate__fadeIn 
                    animate__faster
                    todoItem__edit-form 
                    alignX">
                    <TodoForm
                        inputType={'text'}
                        inputValue={desc}
                        inputName={'desc'}
                        inputOnChange={handleInputChange}
                        inputPlaceholder={'Cambiar descripción...'}
                        btnTitle={'Guardar'}
                        btnClasses={'btn-save-edit btnNormal'}
                        onSubmit={handleEditTask}
                    />
                    <i 
                        className="material-icons btn-close-edit"
                        onClick={() => setEditVisible(!editVisible)}>
                            close
                    </i>
                </div>
            }
        </li>
    )
}
