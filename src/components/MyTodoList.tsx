import React from 'react';
import { Todo } from './Todo';
import { useParams } from 'react-router';
import { Todos } from './Todos';

export const MyTodoList = () => {
	const params = useParams();
	console.log(params);
	return <Todos/>
}