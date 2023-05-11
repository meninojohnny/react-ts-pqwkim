import * as React from 'react';
import './Navbar.css'

function Navbar({setValor}) {
  function Clicar(e) {
    e.preventDefault()
    setValor(e.target.id)
  }

   return(
     <div className='body'>
       <span className='img'></span>
       <div className='menu'>
         <a id='Home' onClick={Clicar}>Home</a>
         <a id='Projetos' onClick={Clicar}>Projetos</a>
         <a id='Contatos' onClick={Clicar}>Contatos</a>
         <a id='Empresa' onClick={Clicar}>Empresa</a>
       </div>
     </div>
   )
}

export default Navbar