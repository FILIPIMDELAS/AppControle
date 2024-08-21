import DivSide from "../SideBar/DivSide"
import DivTop from "../TopBar/DivTop"
import './Layout.css'

// eslint-disable-next-line react/prop-types
export default function Layout({ children }){
    return(
        <div className="Container">
            <DivSide />
            <div className="ContainerContent">
                <DivTop />
                <div className="DivChildren">{children}</div>
            </div>
        </div>
    )
}