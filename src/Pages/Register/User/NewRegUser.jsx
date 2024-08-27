import Layout from '../../../Components/Layout/Layout'
import FooterContent from '../Components/FooterContent/FooterContent'
import './NewRegUser.css'

export default function NewRegUser(){
    return(
        <Layout>
            <p className='DescriptionDisplay'>Cadastro de Usuario</p>
            <div style={{ display: 'flex', padding: '5px 0px', justifyContent: 'center', gap: '.5%' }}>
            <div className='divCod divs'>
                    <label htmlFor="inputCod">Código</label>
                    <div id='inputCod'>Gerado automaticamente pelo sistema</div>
                </div>
                <div className='divDesc divs'>
                    <label htmlFor="inputDesc">Nome</label>
                    <input type="text" id='inputDesc'/>
                </div>
                <div className='divAct divs'>
                    <label htmlFor="inputAct">Status do Usuario</label>
                    <input type="text" id='inputAct'/>
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
            <div style={{ display: 'flex', padding: '5px 0px', justifyContent: 'center', gap: '.5%' }}>
                <div className='divFun divs'>
                    <label htmlFor="inputFun">Função</label>
                    <input type="text" id='inputFun'/>
                </div>
            </div>
            <FooterContent link='User'/>
        </Layout>
    )
}