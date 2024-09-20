import Item from '../../component/item';

const Layout = ({data,totalPages,next,previous,page}) => {
	
	return <div>
		{data.map((item) => <Item key={item.url.split('/')[6]} item={item} id={item.url.split('/')[6]}/>)}
		
		<div onClick={previous}>previous</div>
		{page+1}/{totalPages}
		<div onClick={next}>next</div>
	</div>
	
	
}

export default Layout;

