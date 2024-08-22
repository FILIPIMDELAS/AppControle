import Layout from '../../../Components/Layout/Layout'
import FooterContent from '../Components/FooterContent/FooterContent'
import './NewRegSup.css'

export default function NewRegSup(){
    return(
        <Layout>
            <p className='DescriptionDisplay'>Cadastro de Fornecedor</p>
            <FooterContent link='Supplier'/>
        </Layout>
    )
}