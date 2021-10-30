import React, { useContext, useState, useRef } from "react";
//import { TodosContext } from '../context/TodosProvider';
import { TodosContext } from "../Context/TodosProvider";

export const Todos:React.FC = () => {
	const { todos, addTodo } = useContext(TodosContext);
	const [todoValue, setTodoValue] = useState('');
	const refInput = useRef<HTMLInputElement | null>(null);
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setTodoValue(value);
	}

	const addTodoHandler = () => {
		addTodo(todoValue);
		if(refInput.current){
			refInput.current.value = '';
		}

	}
  return (
    <div>
			<h1>TODO WITH CONTEXT</h1>
			<h5>My List:</h5>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>
			<input ref={refInput} type='text' name='newTodo' onChange={(e) => handleInput(e)} />
      <button onClick={() => addTodoHandler()}>add todo</button>
    </div>
  );

}