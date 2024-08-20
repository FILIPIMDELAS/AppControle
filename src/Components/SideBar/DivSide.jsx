import ButtonsSide from './ButtonsSide'
import './DivSide.css'
import logo from '../../img/SICO.svg'

export default function DivSide(){
    return(
        <div id='divSide'>
            <img src={logo} alt="" />
            <ButtonsSide/>
        </div>
    )
}
