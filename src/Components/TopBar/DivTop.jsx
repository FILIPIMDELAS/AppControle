import './DivTop.css'
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function DivTop() {
    return(
        <div className='DivTop'>
            <div className='work'>
                <IoMenu className='iconMenu'/>
                <input type="text" placeholder='SELECIONE A OBRA'/>
                <IoChevronForwardOutline className='icon'/>
            </div>
            <div className='users'>
                <p>Filipe Cristovam</p>
            </div>
        </div>
    )
}