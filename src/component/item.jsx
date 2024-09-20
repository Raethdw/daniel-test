import {Link} from 'react-router-dom';

const Item = ({ item , id}) =>{
	return <div>
		<Link to={`/pokemon/${item.name}`}>{item.name}</Link>
		<img src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={''}/>
	</div>
}

export default Item;