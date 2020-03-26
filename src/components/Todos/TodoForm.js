import React from 'react';
import { IonItem, IonInput, IonButton } from '@ionic/react';

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {

  const onFormInput = (e) => {
    setNewTodo({ ...newTodo, description: e.target.value })
  }

  return (
    <IonItem>
      <IonInput value={newTodo.description} onIonChange={onFormInput} inputMode="text" placeholder="Descripcion de tarea" />
      <IonButton color="primary" onClick={addTodo}>Añadir todo</IonButton>
    </IonItem>
  );
}

export default TodoForm;