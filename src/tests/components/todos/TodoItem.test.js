import { TodoItem } from 'components/todos/TodoItem';
import {shallow} from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { CustomBtn } from 'ui/customs/CustomBtn';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas en <TodoItem.js />', () => {

    const task = {
        id: new Date().getTime(),
        desc: 'todo desc',
        done: false,
        checked: false};
    
    const index = 1;

    const wrapper = shallow(<TodoItem task={task} index={index} />)
    
    test('debe mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('TodoForm').exists()).toBe(false);
        
    });
    
})
