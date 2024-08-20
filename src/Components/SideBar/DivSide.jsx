import ButtonsSide from './ButtonsSide'
import './DivSide.css'
import logo from '../../img/SICO.svg'

export default function DivSide(){
    return(
        <div id='divSide'>
            <img src={logo} alt="" />
            <ButtonsSide content="Novidades" />
            <ButtonsSide content="Pagina Inicial" />
            <ButtonsSide content="Cadastro" list="Obra"/>
            <ButtonsSide content="Controle de Obras" list="Dashboards" list2="Planejamento"/>
        </div>
    )
}
