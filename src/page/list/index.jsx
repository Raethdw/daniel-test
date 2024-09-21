import Layout from './layout';
import {useFetch} from '../../hook/usefetch';
import {initialState,reducer} from '../../hook/reducer';
import {useReducer} from 'react';

const ListLayout = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {loading, data,error} = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=${state.limit}&offset=${state.page*state.limit}`,dispatch);
	
	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;
	if (data) return <Layout data={data}/>;
}

export default ListLayout;

