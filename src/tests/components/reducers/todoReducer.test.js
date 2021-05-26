import { todoReducer } from 'reducers/todoReducer';
import { demoTodos } from 'tests/fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {
    test('debe retornar el state por default ', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('debe agregar una Task', () => {
        const newTask = {
            id: 3,
            desc: 'todo desc 3',
            done: false,
            checked: false
        };
        const action = {
            type: 'add',
            payload: newTask
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTask]);
    });

    test('debe eliminar una Task', () => {
        
        const action = {
            type: 'delete',
            payload: 1
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    });

    test('debe eliminar lista completa de tasks', () => {
        
        const action = {
            type: 'delete-all',
            payload: demoTodos
        };
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(0);
        expect(state).toEqual([]);
    });

    test('debe marcar una tarea completada', () => {
        
        const action = {
            type: 'complete',
            payload: 1
        };
        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(false);
        expect(state[0].checked).toBe(false);
        expect(state[1]).toEqual(demoTodos[1]);
    });

    test('debe editar el nombre de la task', () => {
        
        const action = {
            type: 'edit',
            payload: {
                id: 1,
                desc: 'new desc'
            }
        };
        const state = todoReducer(demoTodos, action);
        expect(state[0].desc).toBe(action.payload.desc);
        expect(state[1]).toEqual(demoTodos[1]);
    });
    
})