import * as React from 'react';
import './Card2.css';

function Card2({
  servico,
  projeto,
  setProjeto,
  projetoEdit,
  setProjetoEdit,
  setValor,
  setControle2
}){

  function Excluir(e){
    projetoEdit.servicos.map(item => {
      if (item.nome == e.target.id) {
        var projeto2 = projeto
        var n1 = projeto2.indexOf(projetoEdit)
        var n2 = projeto2[n1].servicos
        var n3 = n2.indexOf(servico)
        var n4 = projeto2[n1].total
        var n5 = servico.custo
        projeto2[n1].total = Number(n4) - Number(n5)
        projeto2[n1].servicos.splice(n3, 1)
        setProjeto(projeto2)
        setValor('branco2') 
      }
    })

  }

  return(
    <div className='Card2'>
      <h2>{servico.nome}</h2>
      <h3><span>Custo total:</span> R${servico.custo}</h3>
      <h3>{servico.desc}</h3>
      <button id={servico.nome} onClick={Excluir}> <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQUT1zYTLPzZ7Nw6FPhMvloPgsRyf9D3KjuufIiuQwVohY4AVNjR7TPnpF9UmwA6IB0YKmW3JsNg3-RZRO5ERCBCaizcrRcilGcno5nfb7FAKA0K6d1QtlNDN6zwwcW_jgszH6xIzeHkQ08CNVIvyvwWPdJw1MehPPzrh4h5Myt90qPPWggcM1YqMxCA/s16/bin.png" alt=""/> Excluir</button>
    </div>
  )
}

export default Card2