import Link from "next/link"
import getPlus from '../GetPlus'
import { useRouter } from "next/router"
import styles from './Menu.module.scss'

type Props = {
    isMenuStatus: boolean,
    isMenuAnimate: boolean
}

type MenuData = {
    name: string,
    href: string
}
type MenuProps = {
    item: MenuData
}

const Menu = ({isMenuStatus,isMenuAnimate}:Props) => {
    const router = useRouter()

    const menuData = [
        {
            name: 'HOME',
            href: '/'
        },
        {
            name: 'ABOUT',
            href: '/about'
        },
        {
            name: 'WORKS',
            href: '/works'
        },
        {
            name: 'CONTACT',
            href: '/contact'
        }
    ]
    const MenuItem = ({item} : MenuProps) => {
        return <li><Link href={item.href}><a className={router.pathname == item.href ? styles.active : ""}>{item.name}</a></Link></li>
    }

    return (
        <div className={`${styles.site__menu} ${isMenuStatus ? styles.site__menuActive:''} ${isMenuAnimate ? styles.site__menuAnimate:''}`}>
            <div className={styles.menu}>
                <ul className={styles.menu_list}>
                    {
                        menuData.map((item:MenuData,i:number) => <MenuItem key={i} item={item}/>)
                    }
                </ul>
            </div>
            <div className={styles.plus_list}>
                {getPlus({count:432})}
            </div>
        </div>
    )
}
  
export default Menu