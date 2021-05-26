import { actionTypes } from "./typesReducer";

export const todoReducer = (state = [], action) => {

    const { payload } = action;

    switch (action.type) {
        case actionTypes.addTask:
            return [...state, payload];
        case actionTypes.deleteTask:
            return state.filter(task => task.id !== payload);
        case actionTypes.deleteAllTasks:
            return state = [];
        case actionTypes.completeTask:
            return state.map(task =>
                (task.id === payload.id)
                    ? { ...task, done: !task.done, checked: !task.checked }
                    : task
            )
        case actionTypes.editTask:
            return state.map(task =>
                (task.id === payload.id)
                    ? { ...task, desc: payload.desc }
                    : task
            )
        default:
            return state;
    }
}
