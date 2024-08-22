import './ButtonsSide.css'
import '../../animation.css'
import { MenuItens } from './MenuItens';
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { PiCashRegisterLight } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { TbNews } from "react-icons/tb";



export default function ButtonsSide(){
    return(
        <>
            {MenuItens.map((itens, index) => {
                return(
                    <div className='divSide' key={index}>
                        <div className='ContentTitle select' onClick={() => {
                            const icon = document.getElementById(`icons${index}`)
                            const div = document.getElementById(`subDiv${index}`)
                            if(div.style.display === 'flex'){
                                icon.classList.add('animationDesactiveIcon')
                                icon.classList.remove('animationActiveIcon')
                                div.classList.add('animationDesactiveDiv')
                                div.classList.remove('animationActiveDiv')
                                div.style.display = 'none'
                            }else{
                                icon.classList.add('animationActiveIcon')
                                icon.classList.remove('animationDesactiveIcon')
                                div.classList.add('animationActiveDiv')
                                div.classList.remove('animationDesactiveDiv')
                                div.style.display = 'flex'
                            }}}>
                            <div className='ButtonIcon'>
                                {itens.title === `Novidades` ? <TbNews className='iconDescriptions'/> : ""}
                                {itens.title === `Pagina Inicial` ? <IoHomeOutline className='iconDescriptions'/> : ""}
                                {itens.title === `Cadastro` ? <PiCashRegisterLight className='iconDescriptions'/> : ""}
                                {itens.title === `Controle de Obras` ? <FaRegBuilding className='iconDescriptions'/> : ""}
                                <button className="butSide">{itens.title}</button>
                            </div>
                            {itens.itens != "" ? <IoChevronForwardOutline className='i_Side' id={`icons${index}`}/> : ""}
                        </div>
                            {itens.itens != "" ? 
                                <div className='list' id={`subDiv${index}`}>
                                    <ul>
                                        {itens.itens.map((subItens, index) => {
                                            return(
                                                <li key={index} className='select' onClick={() => {
                                                    window.location.href = subItens.link
                                                }}>{subItens.title}</li>  
                                            )
                                        })}
                                    </ul>
                                </div> 
                            : "" }
                    </div>
                )
            })}
        </>
    )
}