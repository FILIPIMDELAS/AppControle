/* eslint-disable react/prop-types */
import ButReturnReg from '../Buttons/ButReturnReg'
import ButSaveReg from '../Buttons/ButSaveReg'
import './FooterContent.css'

export default function FooterContent(props){
    return(
        <div className='FooterContent'>
            <ButReturnReg link={props.link}/>
            <ButSaveReg />
        </div>
    )
}