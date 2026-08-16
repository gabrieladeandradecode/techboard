import './select.css'

export function Select(props) {
    return (
        <select {...props} className='select'>
            <option value="">Selecione uma opção..</option>
            <option value="">Teste</option>
            <option value="">Eventos</option>
        </select>
    )
}
