import Layout from '../../../Components/Layout/Layout'
import FooterContent from '../Components/FooterContent/FooterContent'
import './NewRegUser.css'

export default function NewRegUser(){
    return(
        <Layout>
            <p className='DescriptionDisplay'>Cadastro de Usuario</p>
            <FooterContent link='User'/>
        </Layout>
    )
}