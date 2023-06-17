"use client"
import Link from "next/link"
import  {usePathname} from "next/navigation";
import styles from '@/app/styles/navigation.module.scss';
type NavLink = {
    label: string,
    href: string
};
type Props = {
    navLinks: NavLink[];
}

const Navigation:React.FC<Props>  = ({navLinks}) =>{
    const pathname = usePathname();

    return <div className={styles.aside_menu}>
        {navLinks.map((link)=> {
            const isActive = pathname ===link.href;

            return <Link
            className={isActive ? styles.aside_menu_item_active : styles.aside_menu_item}
            key = {link.label}
            href = {link.href}>
                {link.label}
            </Link>
        })}
    
    </div>
}
export {Navigation}