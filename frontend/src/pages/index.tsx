import React from 'react';

export default function Home() {
  return (
    <div className="container">
      <h1>Bem-vindo à Nossa Clínica Veterinária</h1>
      <div className="images-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26W1L0G5fL2KogiDOsEFYVluUiucOywFdTw&s" alt="Imagem de um cachorro feliz" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tMSEwdWIC3uh9Rdsj-RSw1mv-wjeK-MTtw&s" alt="Imagem de um gato relaxado" />
      </div>
      <p className="description">
        Nossa clínica veterinária oferece cuidados especializados para garantir o bem-estar e a saúde dos seus animais de estimação.
      </p>
    </div>
  );
}
