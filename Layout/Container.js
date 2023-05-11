import * as React from 'react';
import './Container.css'
import Home from '../Paginas/Home'
import Contatos from '../Paginas/Contatos'
import Projetos from '../Paginas/Projetos'
import Empresa from '../Paginas/Empresa'
import NovoProjeto from '../Paginas/NovoProjeto'
import Branco from '../Paginas/Branco'
import Branco2 from '../Paginas/Branco2'
import ProjetoEdit from '../Paginas/ProjetoEdit'


import {useState} from 'react'


function Container({valor, setValor}) {

  var teste = [{
    nome:'Teste',
    orcamento:12345,
    categoria:'Design',
    total:0,
    servicos:[
      {
        nome:'Tijolos',
        custo:1500,
        desc:'comprar os tiojos'
      }
    ]
  }]

  var [projeto, setProjeto] = useState([])
  var [projetoEdit, setProjetoEdit ] = useState({})
  var [controle, setControle] = useState(true)
  var [controle2, setControle2] = useState(true)

  var tag = null

  switch (valor) {
    case 'Home':
      tag = <Home setValor={setValor} />
      break
    case 'Contatos':
      tag = <Contatos />
      break
    case 'Empresa':
      tag = <Empresa />
      break
    case 'Projetos':
      tag = <Projetos 
      projeto={projeto} 
      setProjeto={setProjeto} 
      setValor={setValor} 
      setProjetoEdit={setProjetoEdit} />
      break
    case 'Novo Projeto':
      tag = <NovoProjeto projeto={projeto} setProjeto={setProjeto} setValor={setValor} />
      break
    case 'branco':
      tag = <Branco setValor={setValor}/>
      break
    case 'branco2':
      tag = <Branco2 setValor={setValor}/>
      break
    case 'projetoEdit':
      tag = <ProjetoEdit 
      projeto={projeto} 
      setProjeto={setProjeto} 
      projetoEdit={projetoEdit}
      setProjetoEdit={setProjetoEdit} 
      setProjetoEdit={setProjetoEdit} 
      setValor={setValor} 
      controle={controle} 
      setControle={setControle}
      controle2={controle2}
      setControle2={setControle2}/>
  }

  return(
    <div className='container'>
      {tag}
    </div>
  )
}

export default Container 