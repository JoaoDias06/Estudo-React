import Botao from "../Botao"
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <Botao className="Inicio" />
            <Botao className="Pesquisar" />
            <Botao className="Jogos" />
            <Botao className="Perfil" />
            <Botao className="Sair" />
        </div>
    )
}

export default SideBar