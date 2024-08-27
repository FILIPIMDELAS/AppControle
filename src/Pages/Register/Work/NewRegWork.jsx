import Layout from '../../../Components/Layout/Layout'
import FooterContent from '../Components/FooterContent/FooterContent'
import './NewRegWork.css'

export default function NewRegWork(){
    return(
        <Layout>
            <p className='DescriptionDisplay'>Cadastro de Nova Obra</p>
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
            <div className='divPla divs'>
                    <label htmlFor="inputPla">Logradouro</label>
                    <input type="text" id='inputPla'/>
                </div>
                <div className='divNei divs'>
                    <label htmlFor="inputNei">Bairro</label>
                    <input type="text" id='inputNei'/>
                </div>
                <div className='divNum divs'>
                    <label htmlFor="inputNum">Número</label>
                    <input type='number' id='inputNum'/>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '5px 0px', justifyContent: 'center', gap: '.5%' }}>
                <div className='divCit divs'>
                    <label htmlFor="inputCit">Cidade</label>
                    <input type="text" id='inputCit'/>
                </div>
                <div className='divEst divs'>
                    <label htmlFor="inputEst">Estado</label>
                    <input type="text" id='inputEst'/>
                </div>
                <div className='divCEP divs'>
                    <label htmlFor="inputCEP">CEP</label>
                    <input type="text" id='inputCEP'/>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '5px 0px', justifyContent: 'start', gap: '.5%' }}>
                <div className='divIni divs'>
                    <label htmlFor="inputIni">Data Início</label>
                    <input type="date" id='inputIni'/>
                </div>
                <div className='divEnd divs'>
                    <label htmlFor="inputEnd">Data Término</label>
                    <input type="date" id='inputEnd'/>
                </div>
                <div className='divSit divs'>
                    <label htmlFor="inputSit">Situação</label>
                    <input type="text" id='inputSit'/>
                </div>
            </div>
            <FooterContent link='Work'/>
        </Layout>
    )
}