import SideBarMenu from '../SideBarMeny/SideBarMenu'
import style from './index.module.scss'

const Layout = (props) => {
  const { children } = props
  return (
    <div className={style.layout_wrapper}>
      <SideBarMenu />
      <div className={style.layout_content}>{children}</div>
    </div>
  )
}

export default Layout
