import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card de colaborador do seu youtuber favorito</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Email" placeholder="Digite seu email" />
                <CampoTexto label="Idade" placeholder="Digite sua idade" />
            </form>
        </section>
    )
}

export default Formulario