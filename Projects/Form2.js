import * as React from 'react';
import './Form.css'
import {useState} from 'react'


function form2({
  projeto, 
  setProjeto, 
  projetoEdit, 
  setProjetoEdit, 
  setValor, 
  setControle
}) {

  var [nome, setNome] = useState()
  var [orcamento, setOrcamento] = useState()
  var [categoria, setCategoria] = useState()



  function Editar(e) {
    e.preventDefault()

    var projeto3 = {
      nome,
      orcamento,
      categoria,
      total:(projetoEdit.total),
      servicos:(projetoEdit.servicos)
    }

    var projeto4 = projeto
    projeto4[projeto4.indexOf(projetoEdit)] = projeto3
    setProjeto(projeto4)
    setProjetoEdit(projeto3)
    //setValor('projetos')
    setControle(true)
  }


  return(
    <div>
      <form className='form'>
        <div>
          <label>Nome do projeto:</label>
          <input onChange={(e) => setNome(e.target.value)} type='text' placeholder='Insira o nome do projeto'/>
        </div>
        <div>
          <label>Orçamento do projeto:</label>
          <input onChange={(e) => setOrcamento(e.target.value)} type="number" placeholder='Insira o orçamento total'/>
        </div>
        <div>
          <label>Selecione a categoria:</label>
          <select id='categoria' onChange={(e) => setCategoria(e.target.value)}>
            <option disabled selected>Selecione a categoria</option>
            <option>Infra</option>
            <option>Desenvolvimento</option>
            <option>Design</option>
            <option>Planejamento</option>
          </select>
          <div>
            <input onClick={Editar} className='botao' type='submit' value='Editar projeto'/>
          </div>

        </div>
      </form>
    </div>

  )
}

export default form2