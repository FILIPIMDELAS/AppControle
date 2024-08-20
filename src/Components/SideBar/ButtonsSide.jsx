import './ButtonsSide.css'
import { MenuItens } from './MenuItens';
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { PiCashRegisterLight } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { TbNews } from "react-icons/tb";


export default function ButtonsSide(){
    function openMenu(id){
        const icon = document.getElementById(`icons${id}`)
        const div = document.getElementById(`subDiv${id}`)
        if(div.style.display == 'flex'){
            icon.style.transform = 'rotate(1deg)'
            div.style.display = 'none'
        }else{
            icon.style.transform = 'rotate(90deg)'
            div.style.display = 'flex'
        }
    }
    return(
        <>
            {MenuItens.map((itens, index) => {
                return(
                    <div className='divSide' key={index}>
                        <div className='ContentTitle select' onClick={openMenu}>
                            <div className='ButtonIcon'>
                                {itens.title == `Novidades` ? <TbNews className='iconDescriptions'/> : ""}
                                {itens.title == `Pagina Inicial` ? <IoHomeOutline className='iconDescriptions'/> : ""}
                                {itens.title == `Cadastro` ? <PiCashRegisterLight className='iconDescriptions'/> : ""}
                                {itens.title == `Controle de Obras` ? <FaRegBuilding className='iconDescriptions'/> : ""}
                                <button className="butSide">{itens.title}</button>
                            </div>
                            {itens.itens != "" ? <IoChevronForwardOutline className='i_Side' id={`icons${itens.title}`}/> : ""}
                        </div>
                            {itens.itens != "" ? 
                                <div className='list' id={`subDiv${itens.title}`}>
                                    <ul>
                                        {itens.itens.map((subItens, index) => {
                                            return(
                                                <li key={index}>{subItens.title}</li>  
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