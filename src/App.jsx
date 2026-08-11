import { useState } from 'react'
import './App.css'
import { Form } from './components/Form'

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
