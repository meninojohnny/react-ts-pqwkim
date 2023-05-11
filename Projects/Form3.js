import * as React from 'react';
import './Form.css'
import {useState} from 'react'

function form3({projeto, setProjeto, projetoEdit, setServico, setControle2}) {

  var [nome, setNome] = useState()
  var [custo, setCusto] = useState()
  var [desc, setDesc] = useState()

  var servico = {
    nome,
    custo,
    desc,
  }

  var projeto2 = projetoEdit
  var projeto3 = projeto


  function Criar(e) {
    e.preventDefault()
    projeto2.servicos.push(servico)
    projeto2.total = Number(projeto2.total) + Number(custo)
    projeto3[projeto3.indexOf(projetoEdit)] = projeto2
    setProjeto(projeto3)
    setServico(servico)
    setControle2('true')
  }

  return(
    <form className="form">
      <div>
        <label htmlFor="">Nome do serviço:</label>
        <input onChange={e => setNome(e.target.value)} type="text" placeholder="Insira o nome do serviço" />
      </div>
      <div>
        <label htmlFor="">Custo do serviço:</label>
        <input onChange={e => setCusto(e.target.value)}
         type="number" placeholder="Insira o valor do serviço" />
      </div>
      <div>
        <label htmlFor="">Descrição do serviço:</label>
        <input onChange={e => setDesc(e.target.value)}
         type="text" placeholder="Descreva o serviço" />

      </div>
      <div>
        <input onClick={Criar} className="botao" type="submit" value="Adicionar serviço " />
      </div>
    </form>
  )
}

export default form3