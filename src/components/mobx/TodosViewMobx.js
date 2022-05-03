import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import { useStore } from './context';

const TodosViewMobx = observer(() => {
const { todoStore } = useStore();

useEffect(() => {
    todoStore.getTodos();    
}, []);


    const todosJSX = todoStore.todos.map(
        (item) => {
            return (
                <li
                    key = { item.id }>
                    { item.title }
                </li>
            );
        },
    );

    return (
        <>
            <h1>Автор</h1>
            <ol>
                {todosJSX}
            </ol>
        </>
    );
});

export default TodosViewMobx;
