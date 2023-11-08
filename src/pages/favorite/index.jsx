import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import "./favorite.css";
import {removeFavorite} from '../../store/actions';
const Favorite = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch()


  return (
    <div className='favorite'>
       <ul className='list'>
        {favorites.map((item, index) => (
          <li key={index}>{item.name} <button className='remove_btn' onClick={() => dispatch(removeFavorite(item))}>remove</button></li>
        ))}
       </ul>
    </div>
  )
}

export default Favorite