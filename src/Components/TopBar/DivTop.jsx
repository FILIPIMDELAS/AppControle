import './DivTop.css'
import { WorkItens } from './WorkItens.js'
import { IoChevronForwardOutline } from "react-icons/io5";

export default function DivTop() {
    

    function OpenDivSelectWork(){
        const input = document.getElementById('input_selectWork')
        const div = document.getElementById ('SelectWork')
        if(div.style.display === 'flex'){
            div.style.display = 'none'
            div.classList.remove('animationActiveDiv')
            div.classList.add('animationDesactiveDiv')
            input.style.borderRadius = '5px'
        }else{
            div.style.display = 'flex'
            div.classList.add('animationActiveDiv')
            div.classList.remove('animationDesactiveDiv')
            input.style.borderRadius = '5px 5px 0px 0px'
        }
    }
    return(
        <div className='DivTop'>
            <div className='work'>
                <input type="text" placeholder='SELECIONE A OBRA' id='input_selectWork' onClick={OpenDivSelectWork}/>
                <IoChevronForwardOutline className='icon' id='icon_inputSelectWork' onClick={OpenDivSelectWork}/>
            </div>
            <div className='SelectWork' id='SelectWork'>
                {WorkItens.map((itens, index) => {
                    return(
                        <p key={index} className='p_SeleckWork' onClick={() => {
                            document.getElementById('input_selectWork').placeholder = itens.title
                            OpenDivSelectWork()
                        }}>{itens.title}</p>
                    )
                })}
            </div>
            <div className='users'>
                <p>Filipe Cristovam</p>
            </div>
        </div>
    )
}