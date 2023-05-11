import * as React from 'react';
import './Card.css'


function card({projeto, setProjeto, setValor, nome, orcamento, categoria, setProjetoEdit}){

  function Excluir(e) {
    projeto.map(item => {
      if (item.nome == e.target.id) {
        var projeto2 = projeto
        projeto2.splice(projeto2.indexOf(item), 1)
        setProjeto(projeto2)
        setValor('branco')
      }
    })
  }

  function Editar(e) {
    projeto.map(item => {
      if (item.nome == e.target.id)
        setProjetoEdit(item)
    })
    setValor('projetoEdit')

  }

  return(
    <div className='Card'>
      <h3>{nome}</h3>
      <h4>Orçamento: <span>R${orcamento}</span></h4>
      <h4><span>{categoria}</span></h4>
      <div className='bnts'>
        <p id={nome} onClick={Editar}> <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1wHgQVIUsYqLGy5awqA_P7lT4RvCqgO6XssyO2l_JXs8fH6a809rzJboq7bJ6CjbdXQyqiIJUSvJsNXlLVwybZO3iJIBRgLH8j_9Ea1TYoKSb5EjYCuNPn43Mepd-q5FFyK6NPcQiNFWfVJFulNCXemmLU76XFieKI34YPJyMwur64AQfwvK4YnWjLQ/s512/pencil.png' /> Editar</p>
        <p id={nome} onClick={Excluir}><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQUT1zYTLPzZ7Nw6FPhMvloPgsRyf9D3KjuufIiuQwVohY4AVNjR7TPnpF9UmwA6IB0YKmW3JsNg3-RZRO5ERCBCaizcrRcilGcno5nfb7FAKA0K6d1QtlNDN6zwwcW_jgszH6xIzeHkQ08CNVIvyvwWPdJw1MehPPzrh4h5Myt90qPPWggcM1YqMxCA/s16/bin.png" alt=""/> Excluir</p>
      </div>

    </div>
  )
}

export default card