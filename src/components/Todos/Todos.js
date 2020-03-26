import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import axios from 'axios';

const Todos = () => {
  const api = "https://polar-scrubland-76573.herokuapp.com/api/todos/";

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    description: "",
    state: "progress"
  });

  useEffect(() => {
    axios.get(api)
      .then(res => {
        setTodos(res.data);
      })
      .catch(err => {
        throw err;
      })
  }, [])

  const addTodo = async () => {
    try {
      const response = await axios.post(api, newTodo);
      setTodos([...todos, response.data]);
      return response;
    }
    catch (err) {
      throw err;
    }
  }

  const finishTodo = async (id) => {
    try {
      const finishedTodo = todos.find(todo => todo.id === id);
      finishedTodo.state = "finished";
      const response = await axios.put(api + id, finishedTodo);
      setTodos([...todos, finishedTodo]);
      return response;
    }
    catch (err) {
      throw err;
    }
  }

  return (
    <IonGrid>
      <IonRow class="ion-justify-content-center">
        <IonCol sizeMd="6" sizeSm="8" sizeXs="12">
          <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
        </IonCol>
      </IonRow>
      <IonRow class="ion-justify-content-center">
        <IonCol sizeMd="6" sizeSm="8" sizeXs="12">
          <TodoList todos={todos} finishTodo={finishTodo} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Todos;