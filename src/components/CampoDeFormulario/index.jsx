import './fieldset.css'

export function CampoDeFormulario({ children }){
  return (
    <fieldset className="fieldset">{ children }</fieldset>
  )
}
