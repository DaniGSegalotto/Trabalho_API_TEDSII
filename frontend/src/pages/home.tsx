import React from 'react'; // Importa a biblioteca React

// Componente Home que representa a página inicial da clínica veterinária
export default function Home() {
  return (
    <div className="container"> {/* Contêiner principal da página */}
      <h1>Bem-vindo à Nossa Clínica Veterinária</h1> {/* Título da página */}

      <br /> {/* Quebra de linha */}

      <div className="images-container"> {/* Contêiner para as imagens */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26W1L0G5fL2KogiDOsEFYVluUiucOywFdTw&s" alt="Veterinário com animal" /> {/* Imagem de veterinário */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tMSEwdWIC3uh9Rdsj-RSw1mv-wjeK-MTtw&s" alt="Consulta veterinária" /> {/* Imagem de consulta veterinária */}
      </div>

      <br /> {/* Quebra de linha */}

      <p className="description"> {/* Descrição da clínica */}
        Nossa clínica veterinária oferece cuidados especializados para garantir o bem-estar e a saúde dos seus animais de estimação.
      </p>

      <br /> {/* Quebra de linha */}

      <div className="images-container2"> {/* Segundo contêiner para as imagens */}
        <img src="https://cdn-icons-png.flaticon.com/512/2358/2358446.png" alt="Pata de animal" /> {/* Imagem de pata de animal */}
        <img src="https://media.istockphoto.com/id/1358029520/pt/vetorial/stethoscope-and-animal-footprint-veterinary-concept-silhouette-icon-veterinarian-medicine.jpg?s=612x612&w=0&k=20&c=CgrdYQo58S8ApcCWwPuckv997IQzVLOZ0v23j8EZqKw=" alt="Estetoscópio e pegada de animal" /> {/* Imagem de estetoscópio */}
        <img src="https://st4.depositphotos.com/9782616/38176/v/450/depositphotos_381769740-stock-illustration-illustration-veterinary-clinic-pets-white.jpg" alt="Ilustração de clínica veterinária" /> {/* Ilustração de clínica veterinária */}
        <img src="https://png.pngtree.com/png-clipart/20230803/original/pngtree-veterinary-stamp-care-grunge-treatment-vector-picture-image_9446665.png" alt="Carimbo veterinário" /> {/* Imagem de carimbo veterinário */}
      </div>
    </div>
  );
} // Exporta o componente Home para uso em outras partes do aplicativo