import React from 'react';

const Clock = ({ date, setDate }) => {
  React.useEffect(() => {
    // setInterval permet d'effectuer une action au bout de x miliseconde.
    // Nous avons défini ce temps x à 1000 milisecondes qui vaut 1s.
    setDate(new Date());
    const seconde = setInterval(() => {
      // je met à jour ma date.
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(seconde);
    };
  }, []);

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
