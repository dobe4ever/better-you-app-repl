import React, { useState } from 'react';
import List from '../ui/List';
import TodoCard from './TodoCard';
import AddToDoBox from './AddToDoBox';
import { todos as initialTodos } from '../../data/dummyData'; // Import static data

const TodosList = ({ onToggle, onOpenMenu }) => {
    const [todoList, setTodoList] = useState(initialTodos);

    const handleAddTodo = (title) => {
        if (title.trim()) {
            const newTodo = {
                id: `t${todoList.length + 1}`, // Increment ID based on current list size
                title,
                isCompleted: false
            };
            setTodoList([...todoList, newTodo]);
        }
    };

    const handleEditTodo = (id, newTitle) => {
        setTodoList(todoList.map(todo => 
            todo.id === id ? { ...todo, title: newTitle } : todo
        ));
    };

    const handleDeleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    return (
        <>
            <List
                title="To-Dos"
                items={todoList}
                renderItem={(todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onToggle={() => onToggle(todo.id)}
                        onEdit={handleEditTodo}
                        onDelete={handleDeleteTodo}
                    />
                )}
            />
            <AddToDoBox
                onAdd={handleAddTodo}
            />
        </>
    );
};

export default TodosList;
