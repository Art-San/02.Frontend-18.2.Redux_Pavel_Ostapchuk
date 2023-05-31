import { Link } from 'react-router-dom'
import SideBarConfig from './SideBarConfig'
import style from './index.module.scss'

const SideBarMenu = () => {
  return (
    <div className={style.sidebar_wrapper}>
      <ul className={style.sidebar_list}>
        {SideBarConfig.map((el) => {
          return (
            <Link
              key={el.id}
              to={el.path}
              className={style.sidebar_list__item_link}
            >
              <li>{el.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default SideBarMenu

// const SideBarMenu = () => (
//   <div>
//     <ul>
//       {SideBarConfig.map(({ id, name, path }) => {
//         return (
//           <Link key={id} to={path}>
//             <li>{name}</li>
//           </Link>
//         )
//       })}
//     </ul>
//   </div>
// )
