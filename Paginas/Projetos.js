import * as React from 'react';
import './Projetos.css'
import Card from '.././Projects/Card'

function projetos({projeto, setProjeto, setValor, setProjetoEdit}){

  return(
    <div className='Projetos'>
      <div className='d1'>
        <h1>Meus projetos</h1>
        <button className='bntCriar' value='Novo Projeto' onClick={(e) => setValor(e.target.value)}>Criar Projeto</button>
      </div>
      <div className='d2'>
        {projeto.map(item => (
          <Card projeto={projeto} setProjeto={setProjeto} setValor={setValor} nome={item.nome} orcamento={item.orcamento} categoria={item.categoria} setProjetoEdit={setProjetoEdit} />
        ))}
        
      </div>
    </div>
  )
}

export default projetos