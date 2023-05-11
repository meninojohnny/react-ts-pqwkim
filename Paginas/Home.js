import * as React from 'react';
import './Home.css'

function Home({setValor}){

  return(
    <section className='home'>
      <h1>Bem vindo ao <span>MyFinance</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
      <button value='Novo Projeto' onClick={(e) => setValor(e.target.value)}>Criar Projeto</button>
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgvLBXuWloOwAdbMnt8F5zS3tYV_U0oRbO1c19h77cji0MydAAl0Bd5SWL5w_L-zT79TNeV7eythm4iK19NVFR9S9qeDvun4faF98bpkWqfoqgWbvuxZMy739YyRk8-v6-7QJm_0UoZtLyn1xasWIxkufsJIQ0B6E-uyiQzyzelavEu7fqBouFWNVQqQ/s512/relatorio-de-negocios.png" alt="" />
    </section>
  )
}

export default Home