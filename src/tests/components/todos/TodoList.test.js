import { TodoList } from 'components/todos/TodoList';
import { demoTodos } from 'tests/fixtures/demoTodos';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas en <TodoList />', () => {

    const dispatch = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            dispatch={dispatch}
            hideCompleted={false}
        />
    )

    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe contener el total de sus items actuales', () => {
        expect(wrapper.find('TodoItem').length).toBe(demoTodos.length);
    })
});