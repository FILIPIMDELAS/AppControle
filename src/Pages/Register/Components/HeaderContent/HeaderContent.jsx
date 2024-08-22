/* eslint-disable react/prop-types */
import './HeaderContent.css'
import ButNewReg from '../Buttons/ButNewReg'

export default function HeaderContent(props){
    return(
        <div className='HeaderContent'>
            <div className='InfoHeader'>
                <ButNewReg link={props.link}/>
            </div>
            <div className='HeaderHeader'>
                <p>Itens Listados ( 10 / 20 )</p>
                <div className='searchGeneral'>
                    <p>Pesquisar</p>
                    <input type="text" placeholder='Buscar Registros'/>
                </div>
            </div>
        </div>
    )
}