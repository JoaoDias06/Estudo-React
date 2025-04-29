import './botao.css'

const Botao = (props) => {
    return (
        <div className="botao">
            <button>{props.className}</button>
        </div>
    )
}

export default Botao