import Stickyfooter from '../stickyfooter/Stickyfooter'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { ToastProvider } from 'react-toast-notifications/dist/ToastProvider'
// import Headercontant from '../header/Headercontant'

const Layout = ({children}) => {
    return (
        <div>
           <Header/>
           {/* <Headercontant/> */}
           {children}
           <ToastProvider>
            <Footer/>
            </ToastProvider>
           <Stickyfooter/>

        </div>
    )
}

export default Layout
