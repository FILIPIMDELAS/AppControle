import Layout from '../../../Components/Layout/Layout'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import './User.css'

export default function User(){
    return(
        <Layout> 
            <p className='DescriptionDisplay'>Cadastro de Usuario</p>
            <HeaderContent link='User' display='Cadastro de Usuários'/>
        </Layout>
    )
}