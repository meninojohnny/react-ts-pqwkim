import './ProjetoEdit.css';
import * as React from 'react';
import {useState} from 'react'
import Form2 from '.././Projects/Form2';
import Form3 from '.././Projects/Form3';
import Card2 from '.././Projects/Card2';



function projeto({
  projeto,
  setProjeto,
  projetoEdit,
  setProjetoEdit,
  setValor,
  controle,
  setControle,
  controle2,
  setControle2,
}) {


  var [servico, setServico] = useState(projetoEdit.servicos[0])

  function Mudar() {
    if (controle) {
      setControle(false);
    } else {
      setControle(true);
    }
    //setValor('projetoEdit');
  }

  function Mudar2() {
    if (controle2) {
      setControle2(false)
    } else {
      setControle2(true)
    }
    //setValor('projetoEdit')
  }

  return (
    <div className="ProjetoEdit">

      <div className="d1">
        <div className="d2">
          <div className="d3">
            <h1>{projetoEdit.nome}</h1>
            {controle ? (
              <>
                <h3>
                  Categoria: <span>{projetoEdit.categoria}</span>
                </h3>
                <h3>
                  Orçamento: <span>R${projetoEdit.orcamento}</span>
                </h3>
                <h3>Total utilizado: R${projetoEdit.total}</h3>
              </>
            ) : (
              <Form2
                projeto={projeto}
                setProjeto={setProjeto}
                projetoEdit={projetoEdit}
                setProjetoEdit={setProjetoEdit}
                setValor={setValor}
                setControle={setControle}
              />
            )}
          </div>
          <div>
            {controle ? (
              <button className="bnt" onClick={Mudar}>
                Editar projeto
              </button>
            ) : (
              <button className="bnt" onClick={Mudar}>
                Fechar
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="d1">
        <div className="d2">
        <div className="d3">
          <h2>Adicionar serviços:</h2>
          {controle2 ? (<p></p>) : (
          <Form3 
          projeto={projeto}
          setProjeto={setProjeto}
          projetoEdit={projetoEdit}
          //setProjetoEdit={setProjetoEdit}
          setServico={setServico}
          setControle2={setControle2}
           />
          ) }
        </div>
        <div className="d7">
          {controle2 ? (
            <button className="bnt" onClick={Mudar2}>Adicionar serviço</button>
          ) : (
            <button className='bnt' onClick={Mudar2}>Fechar</button>
          )}
        </div>
      </div>
      </div>

      <div className="d1">
        <div className="d2">
          <div className="d3">
            <h2>Serviços:</h2>
            <div className='d4'>
              {projetoEdit.servicos.map(item => (
                <Card2 
                servico={item}
                projeto={projeto}
                setProjeto={setServico}
                projetoEdit={projetoEdit}
                setProjetoEdit={setServico}
                setValor={setValor}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default projeto;
