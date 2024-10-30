// src/pages/index.tsx
import { useEffect } from 'react'; // Importa o hook useEffect do React
import { useRouter } from 'next/router'; // Importa o hook useRouter do Next.js

// Componente HomePage que representa a página inicial
const HomePage = () => {
  const router = useRouter(); // Cria uma instância do roteador

  useEffect(() => {
    // Redireciona para a página de login ao carregar a página inicial
    router.push('/login');
  }, [router]); // O array de dependências contém o roteador

  return null; // Retorna null porque não precisamos renderizar nada aqui
};

// Exporta o componente HomePage para uso em outras partes do aplicativo
export default HomePage;