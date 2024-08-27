import Layout from '../../../Components/Layout/Layout'
import FooterContent from '../Components/FooterContent/FooterContent'
import './NewRegSer.css'

export default function NewRegSer(){
    return(
        <Layout>
            <p className='DescriptionDisplay'>Cadastro de Novo Serviço</p>
            <div style={{ display: 'flex', padding: '5px 0px', justifyContent: 'center', gap: '.5%' }}>
                <div className='divCod divs'>
                    <label htmlFor="inputCod">Código</label>
                    <input type="text" id='inputCod'/>
                </div>
                <div className='divDesc divs'>
                    <label htmlFor="inputDesc">Descrição</label>
                    <input type="text" id='inputDesc'/>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '5px 0px', justifyContent: 'center', gap: '.5%' }}>
                <div className='divUni divs'>
                    <label htmlFor="inputUni">Unidade</label>
                    <input type="text" id='inputUni'/>
                </div>
                <div className='divPar divs'>
                    <label htmlFor="inputPar">Parametro Elemento</label>
                    <input type="text" id='inputPar'/>
                </div>
                <div className='divVal divs'>
                    <label htmlFor="inputVal">Valor</label>
                    <input type="text" id='inputVal'/>

                </div>
            </div>
            <FooterContent link='Service'/>
        </Layout>
    )
}