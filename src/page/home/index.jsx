import Layout from './layout';
import {useFetch} from '../../hook/usefetch';
import {initialState,reducer} from '../../hook/reducer';
import {useReducer} from 'react';

const HomeLayoud = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {loading, data,error} = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=${initialState.limit}&offset=0`,dispatch);
	
	const next =()=>{
		dispatch({type:'next_page'});
	}
	
	const previous =()=>{
		dispatch({type:'previous_page'});
	}
	
	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;
	if (data) return <Layout next={next}  previous={previous} totalPages={state.totalPage} page={state.page}/>;
}

export default HomeLayoud;

