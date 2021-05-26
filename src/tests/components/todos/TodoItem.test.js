import { TodoItem } from 'components/todos/TodoItem';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { demoTodos } from 'tests/fixtures/demoTodos';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas en <TodoItem.js />', () => {

    const dispatch = jest.fn();
    const handleDeleteTask = jest.fn();
    const handleEditTask = jest.fn();
    const handleCompleteTask = jest.fn();

    const wrapper = shallow(
        <TodoItem 
            task={demoTodos[0]} 
            index={0} 
            dispatch={dispatch}
        />
    );

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe ejecutar la función handleDeleteTask()', () => {
        // wrapper.find('.btn-delete').simulate('click');
        // expect(handleDeleteTask).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe ejecutar la función handleEditTask()', () => {
        // wrapper.find('.btn-edit').simulate('click');
        // expect(handleEditTask).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe ejecutar la función handleCompleteTask()', () => {
        // wrapper.find('p').simulate('click');
        // wrapper.find('[type="checkbox"]').simulate('click');
        // expect(handleEditTask).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('debe mostrar TodoForm', () => {
        expect(wrapper.find('TodoForm').exists()).toBe(false);
    });

    test('debe mostrar descripción de la task', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
    });

    test('debe tener la clase checkedTask si la task esta en task.done = true', () => {
        const task = demoTodos[0];
        task.done = true;
        const wrapper = shallow(
            <TodoItem task={task} />
        );
        expect(wrapper.find('p').hasClass('checkedTask')).toBe(true);
    });
    
});
