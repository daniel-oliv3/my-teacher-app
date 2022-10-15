import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { Professor } from '../src/@types/professor';
import Lista from '../src/components/Lista/Lista';


const Home: NextPage = () => {

  const professores: Professor[] = [
    {
      id: 1,
      nome: "Daniel Oliveira",
      foto: "https://github.com/daniel-oliv3.png",
      descricao: "Professor de Skateboarding",
      valor_hora: 400
    },
    {
      id: 2,
      nome: "Thiago Souza",
      foto: "https://github.com/daniel-oliv3.png",
      descricao: "Professor de Capoeira",
      valor_hora: 200
    },
    {
      id: 3,
      nome: "Priscila Andrade",
      foto: "https://github.com/daniel-oliv3.png",
      descricao: "Professora de Ingles",
      valor_hora: 300
    },
    {
      id: 4,
      nome: "Mara Rubia",
      foto: "https://github.com/daniel-oliv3.png",
      descricao: "Professora de Portugues",
      valor_hora: 100
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    </Box>
  );
}

export default Home
