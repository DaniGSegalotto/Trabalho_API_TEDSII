// src/pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a página de login ao carregar a página inicial
    router.push('/login');
  }, [router]);

  return null; // Retorna null porque não precisamos renderizar nada aqui
};

export default HomePage;
