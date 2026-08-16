import './form.css' 
import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'
import { Select } from '../Select'
import { Botao } from '../Botao'

export function Form() {
  return (
    <form action="" method="post" className='form'>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual o nome do evento?
        </Label>
        <CampoDeEntrada 
          type="text" 
          id="nome"
          name="nome" 
          placeholder="Summer dev hits"
        />
        
        <Label htmlFor="data">Data do evento</Label>
        <CampoDeEntrada type="text" name="data" placeholder='XX/XX/XXXX' />
        
        <Label htmlFor="tema">Tema do evento</Label>
        <Select name="temas" id="tema"></Select>         

      </CampoDeFormulario>
      <Botao></Botao>
    </form>
  );
}
