/* Se importan todos los componentes */
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
export default Layout;