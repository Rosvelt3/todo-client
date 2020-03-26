import React from 'react';
import './App.css';
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { IonApp, IonToolbar, IonTitle, IonHeader, IonContent } from '@ionic/react';
import Todos from './components/Todos/Todos';

const App = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Todo App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Todos />
      </IonContent>
    </IonApp>
  );
}

export default App;
