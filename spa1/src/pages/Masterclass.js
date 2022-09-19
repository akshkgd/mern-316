import { Link } from 'react-router-dom';
function Masterclass(){
    return(
        <div>
            <nav>
        <ul>
          <li> <Link to='/vip'>Join VIP Group</Link>  </li>
        </ul>
      </nav>
            <h1>this is masterclass page</h1>
            
        </div>
    )
}

export default Masterclass;