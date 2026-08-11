import { TituloFormulario } from '../TituloFormulario'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { Label } from '../Label'

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
        
        <Label htmlFor="">Data do evento</Label>
        <CampoDeEntrada type="text" placeholder='XX/XX/XXXX' />
        
        <Label htmlFor="tema">Tema do evento</Label>
        <select name="temas" id="tema">
          <option value="" disabled>Selecione uma opção..</option>
          <option value=""></option>
          <option value=""></option>
        </select>

      </CampoDeFormulario>
    </form>
  );
}