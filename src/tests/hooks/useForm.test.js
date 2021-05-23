import { useForm } from 'hooks/useForm';
import { renderHook, act } from '@testing-library/react-hooks';


describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'todo'
    };

    test('Debe regresar un formulario por default ', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');

    });

    test('Debe cambiar el valor del formulario ', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [ , handleInputChange] = result.current;

        act(()=> {
           handleInputChange({
               target: {
                    name: 'name',
                    value: 'Task name'
               }
           });
        });

        const [ formValues ] = result.current;
        expect(formValues).toEqual({...initialForm, name: 'Task name'});
    });

    test('Debe re-establecer el formulario con la función reset() ', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [ , handleInputChange, reset] = result.current;

        act(()=> {
           handleInputChange({
               target: {
                    name: 'name',
                    value: 'Task name'
               }
           });

           reset();
        });

        const [ formValues ] = result.current;
        expect(formValues).toEqual( initialForm );
    });
    
})