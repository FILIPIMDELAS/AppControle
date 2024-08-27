import Layout from '../../../Components/Layout/Layout'
import FooterContent from '../Components/FooterContent/FooterContent'
import './NewRegSup.css'

export default function NewRegSup(){
    return(
        <Layout>
            <p className='DescriptionDisplay'>Cadastro de Fornecedor</p>
            <div style={{ display: 'flex', padding: '5px 0px', justifyContent: 'start', gap: '2%', marginLeft: '50px'}}>
                <div className='divPer divs'>
                    <input type="radio" id='inputPer'/>
                    <label htmlFor="inputPer">Pessoa Física</label>
                </div>
                <div className='divJur divs'>
                    <input type="radio" id='inputJur'/>
                    <label htmlFor="inputJur">Pessoa Jurídica</label>
                </div>
            </div>
            <div style={{ display: 'flex', padding: '5px 0px', justifyContent: 'center', gap: '.5%' }}>
                <div className='divCP divs'>
                    <label htmlFor="inputCP">CNPJ</label>
                    <input type="text" id='inputCP'/>
                </div>
                <div className='divRSoc divs'>
                    <label htmlFor="inputRSoc">Razão Social</label>
                    <input type="text" id='inputRSoc'/>
                </div>
                <div className='divNFant divs'>
                    <label htmlFor="inputNFant">Nome Fantasia</label>
                    <input type="text" id='inputNFant'/>
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
            <FooterContent link='Supplier'/>
        </Layout>
    )
}