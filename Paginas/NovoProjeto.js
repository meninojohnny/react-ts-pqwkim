import * as React from 'react';
import './NovoProjeto.css'
import Form from '.././Projects/Form'
import {useState} from 'react'

function novoProjeto({projeto, setProjeto, setValor}){
  
  return(
    <div className='NovoProjeto'>
      <h1>Criar Projeto </h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <Form projeto={projeto} setProjeto={setProjeto} setValor={setValor} />
    </div>
  )
}

export default novoProjeto