import {useEffect,useState} from 'react';

export const useFetch=(url,dispatch)=>{
	const [data,setData]=useState(null);
	const [loading,setLoading]=useState(true);
	const [error,setError]=useState(null);
	
	useEffect(()=>{
		setLoading(true);
		fetch(url)
		.then((res)=>res.json())
		.then(data=>{
			dispatch({type:'add_total',payload:data.count});
			setData(data.results);
			setLoading(false);
		})
		.catch((err)=>{
			setLoading(false);
			setError(err.message)
		});
		
	},[url]);
	
	return {data,loading,error};
};