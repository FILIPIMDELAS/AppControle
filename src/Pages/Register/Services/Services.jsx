import Layout from '../../../Components/Layout/Layout'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import './Services.css'

export default function Service(){
    return(
        <Layout> 
            <p className='DescriptionDisplay'>Cadastro de Serviço</p>
            <HeaderContent link='Service'/>
        </Layout>
    )
}