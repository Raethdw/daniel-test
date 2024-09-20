
export const reducer=(state, action)=> {
	if (action.type === 'next_page' && state.page+1 < state.totalPage) {
			return {
				...state,
				page: state.page + 1
			};
	}
	if (action.type === 'previous_page' && state.page+1 > 0) {
		return {
			...state,
			page: state.page - 1
		};
	}
	if (action.type === 'add_total') {
		console.log(action.type)
		return {
			...state,
			totalPage: Math.trunc(action.payload/state.limit)
		};
	}
	throw Error('Unknown action.');
}

export const initialState={page:0, totalPage:0,limit:10};

