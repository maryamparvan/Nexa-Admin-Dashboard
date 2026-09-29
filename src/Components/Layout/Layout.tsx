import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="LayoutDiv">
      <Sidebar />
      <div className="MainDiv">
        <Header />
        <main className="ContentDiv">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout