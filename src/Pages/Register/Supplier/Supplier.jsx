import Layout from '../../../Components/Layout/Layout'
import HeaderContent from '../Components/HeaderContent/HeaderContent'
import './Supplier.css'

export default function Supplier(){
    return(
        <Layout> 
            <p className='DescriptionDisplay'>Cadastro de Fornecedor</p>
            <HeaderContent link='Supplier'/>
        </Layout>
    )
}