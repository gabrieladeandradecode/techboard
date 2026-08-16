import './label-form.css'

export function Label({ children, htmlFor }){
  return (
    <label className="label-form" htmlFor={'htmlFor'}>{ children }</label>
  )
}
