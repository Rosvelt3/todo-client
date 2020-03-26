import React from 'react';
import { IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { checkmark } from 'ionicons/icons';

const TodoListItem = ({ id, description, finishTodo }) => {
  return (
    <IonItem>
      <IonLabel>{description}</IonLabel>
      <IonButton color="success" onClick={() => { finishTodo(id) }}>
        <IonIcon slot="icon-only" icon={checkmark} />
      </IonButton>
    </IonItem>
  );
}

export default TodoListItem;