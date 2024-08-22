import Layout from '../../../Components/Layout/Layout'
import FooterContent from '../Components/FooterContent/FooterContent'
import './NewRegSer.css'

export default function NewRegSer(){
    return(
        <Layout>
            <p className='DescriptionDisplay'>Cadastro de Serviço</p>
            <FooterContent link='Service'/>
        </Layout>
    )
}