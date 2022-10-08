import type { NextPage } from 'next';

function Botao(props){
  return <a href="#">{props.title}</a>
}


const Home: NextPage = () => {
  return (
    <div>
      
      <Botao title="skate" /><br/>
      
      <Botao  title="sapup3" />
    </div>

  )
}

export default Home
