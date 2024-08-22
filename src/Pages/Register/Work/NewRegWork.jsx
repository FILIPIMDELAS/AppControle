import Layout from '../../../Components/Layout/Layout'
import FooterContent from '../Components/FooterContent/FooterContent'
import './NewRegWork.css'

export default function NewRegWork(){
    return(
        <Layout>
            <p className='DescriptionDisplay'>Cadastro de Obra</p>
            <FooterContent link='Work'/>
        </Layout>
    )
}