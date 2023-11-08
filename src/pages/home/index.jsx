import {company} from '../../constant/index'
import "./home.css"
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../store/actions'
const Home = () => {
  const dispatch = useDispatch()

  return (
    <div className='home'>
       <ul className='list'>
        {company.map((item, index) => (
          <li key={index}>{item.name} <button className='add_btn' onClick={() => dispatch(addFavorite(item))}>Add</button></li>
        ))}
       </ul>
    </div>
  )
}

export default Home