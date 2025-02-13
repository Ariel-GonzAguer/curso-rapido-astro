import { useState } from 'react';

export default function Bienvenida({mensajes}) {

  const mensajeRandom = () => mensajes[(Math.floor(Math.random() * mensajes.length))];

  const [bienvenida, setBienvenida] = useState(mensajes[0]);

  return (
    <div>
      <h3>{bienvenida}, gracias por visitar nuestra página</h3>
      <button onClick={() => setBienvenida(mensajeRandom())}>
        ¡Nuevo saludo!
      </button>
    </div>
  );
}