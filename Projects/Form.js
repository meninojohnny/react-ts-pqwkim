import * as React from 'react';
import './Form.css'
import {useState} from 'react'

function Form({projeto, setProjeto, setValor}) {

  var [nome, setNome] = useState()
  var [orcamento, setOrcamento] = useState()
  var [categoria, setCategoria] = useState()

  function Criar(e) {
    e.preventDefault()


    if (nome == null || orcamento == null || categoria == null) {
      alert('Preencha todos os campos')
    } else {

      var project = {
        nome:nome,
        orcamento:orcamento,
        categoria:categoria,
        total:Number(0),
        servicos:[]
      }
    
      var projeto2 = projeto
      projeto2.push(project)
      setProjeto(projeto2)
      setValor('Projetos')
    }
  }

  return(
    <form className='form'>
      <div>
        <label htmlFor="NameProject">Nome do projeto:</label>
        <input id='NameProject' type='text' placeholder='Insira o nome do projeto' onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label htmlFor="Orcamento">Orçamento do projeto:</label>
        <input id='Orcamento' type="number" placeholder='Insira o orçamento total' onChange={(e) => setOrcamento(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="categoria">Selecione a categoria:</label>
        <select id='categoria' onChange={(e) => setCategoria(e.target.value)}>
          <option disabled selected>Selecione a categoria</option>
          <option>Infra</option>
          <option>Desenvolvimento</option>
          <option>Design</option>
          <option>Planejamento</option>

        </select>
      </div>
      <div>
        <input onClick={Criar} className='botao' type='submit' value='Criar projeto'/>
      </div>
    </form>
  )
}

export default Form