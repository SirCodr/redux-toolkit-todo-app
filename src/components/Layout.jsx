import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar>
        hola
      </Navbar>
      {children}
    </>
  )
}
export default Layout
