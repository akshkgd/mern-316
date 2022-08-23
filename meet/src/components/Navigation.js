import {Link} from 'react-router-dom';
import style from './navigation.module.css'
function Navigation() {
    return (
        <ul className={style.nav}>
            <h2><Link className={style.logo} to='/'>CKM</Link></h2>
            <div className={style.navlinks}>
            <li><Link className={style.links} to='/'>Home</Link></li>
            <li><Link className={style.btn} to='/add'>Add Meeting</Link></li>
            </div>
            
        </ul>
    )
}
export default Navigation;