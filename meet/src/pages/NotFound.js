import {Link} from 'react-router-dom'
import './style.css';
function NotFound(){
    return(
        <div className="text-center">
            <h1>Page you are looking for does not exist!</h1>
            <Link className='btn' to='/'>Homepage</Link>
            
        </div>
    )
}

export default NotFound;