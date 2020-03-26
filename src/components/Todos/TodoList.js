import React from 'react';
import TodoListItem from './TodoListItem';
import { IonList } from '@ionic/react';

const TodoList = ({ todos, finishTodo }) => {
  return (
    <IonList lines="none">
      {
        todos.map((todo, index) => {
          if(todo.state !== "finished"){
            return <TodoListItem key={index} finishTodo={finishTodo} {...todo} />
          }
          return null;
      })
      }
    </IonList>
  );
}

export default TodoList;