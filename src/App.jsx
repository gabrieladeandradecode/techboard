import { useState } from 'react'
import './App.css'

function Form() {
  return (
    <form action="" method="post" className='form'>
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text" name="nome" placeholder='Summer dev hits' />
        
        <label htmlFor="">Data do evento</label>
        <input type="text" placeholder='XX/XX/XXXX' />
        
        <label htmlFor="tema">Tema do evento</label>
        <select name="temas" id="tema">
          <option value="" disabled>Selecione uma opção..</option>
          <option value=""></option>
          <option value=""></option>
        </select>

      </fieldset>
    </form>
  );
}

function App() {
  return (
    <>
    <main>
        <header>
          <img src="/logo.png" alt="Logo da Techboard" />
        </header>
        
        <section className='section-tech'>
          <img src="/banner.png" alt="Banner de Tecnologia" />
        </section>

        <Form/>
    </main>
    </>
  )
}

export default App
