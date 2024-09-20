import Layout from './layout';
import {useFetch} from '../../hook/usefetch';
import {initialState,reducer} from '../../hook/reducer';
import {Suspense,useReducer} from 'react';

const ListLayout = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {loading, data,error} = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=${state.limit}&offset=${state.page*state.limit}`,dispatch);
	
	const next =()=>{
		dispatch({type:'next_page'});
	}
	
	const previous =()=>{
		dispatch({type:'previous_page'});
	}
	
	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;
	if (data) return <Suspense><Layout data={data} next={next}  previous={previous} totalPages={state.totalPage} page={state.page}/></Suspense>;
}

export default ListLayout;

