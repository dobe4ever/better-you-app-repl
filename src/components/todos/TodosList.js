// src/components/todos/TodosList.js

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
                isCompleted: false,
                isRecurring: false,
                hasNotes: false,
                notes: ''
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

    const handleUpdateNotes = (id, notes) => {
        setTodoList(todoList.map(todo => 
            todo.id === id ? { ...todo, notes, hasNotes: notes.trim() !== '' } : todo
        ));
    };

    const handleToggleRecurring = (id) => {
        setTodoList(todoList.map(todo => 
            todo.id === id ? { ...todo, isRecurring: !todo.isRecurring } : todo
        ));
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
                        onToggle={() => setTodoList(todoList.map(t => t.id === todo.id ? {...t, isCompleted: !t.isCompleted} : t))}
                        onEdit={handleEditTodo}
                        onDelete={handleDeleteTodo}
                        onUpdateNotes={handleUpdateNotes}
                        onRepeatToggle={handleToggleRecurring}
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