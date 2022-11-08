import React from 'react';
import Clock from './Clock';
import './style.css';

export default function App() {
  // Je créer un state qui va me permettre de gérer l'affichage de mon composant
  const [showClock, setShowClock] = React.useState(false);
  // J'utilise le state pour manipuler la date, par défaut, `date` vaut new Date();
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <h1>Clock</h1>
      {/**
       * Sur le bouton, quand je clique dessus, je prend l'inverse de mon état précedent
       * true -> false
       * false -> true
       */}
      <button onClick={() => setShowClock(!showClock)}>
        J'affiche l'heure
      </button>
      {
        /**
         * J'utilise l'opérateur ternaire
         * condition ? true : false
         * pour gérer l'affichage
         */
        showClock ? <Clock date={date} setDate={setDate} /> : ''
      }
    </div>
  );
}
