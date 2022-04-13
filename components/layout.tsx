import Header from './navigation/header'
import Footer from './navigation/footer'

const Layout = ({children}: { children: any }) => (
    <>
        <Header/>
            <main>{children}</main>
        <Footer/>
    </>
)

export default Layout;