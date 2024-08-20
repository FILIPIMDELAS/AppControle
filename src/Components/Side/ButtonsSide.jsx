/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './ButtonsSide.css'
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { PiCashRegisterLight } from "react-icons/pi";
import { FaRegBuilding } from "react-icons/fa";
import { TbNews } from "react-icons/tb";


export default function ButtonsSide(props){
    const icon = document.getElementById(props.content)
    const div = document.getElementById(props.list)
    function openMenu(){
        if(div.style.display == 'flex'){
            icon.style.transform = 'rotate(0deg)'
            div.style.display = 'none'
        }else{
            icon.style.transform = 'rotate(90deg)'
            div.style.display = 'flex'
        }
    }
    return(
        <div className='divSide'>
            <div className='ContentTitle select' onClick={openMenu}>
                <div className='ButtonIcon'>
                    {props.content == `Novidades` ? <TbNews className='iconDescriptions'/> : ""}
                    {props.content == `Pagina Inicial` ? <IoHomeOutline className='iconDescriptions'/> : ""}
                    {props.content == `Cadastro` ? <PiCashRegisterLight className='iconDescriptions'/> : ""}
                    {props.content == `Controle de Obras` ? <FaRegBuilding className='iconDescriptions'/> : ""}
                    <button className="butSide">{props.content}</button>
                </div>
                {props.list ? <IoChevronForwardOutline className='i_Side' id={props.content}/> : ""}
            </div>
            {props.list ? 
                <>
                    <div className='list' id={props.list}>
                        <ul>
                            <li className='select'>{props.list}</li>
                            {props.list2 ? <li className='select'>{props.list2}</li> : ""}
                        </ul>
                    </div>
                </>
                : ""}
        </div>
    )
}