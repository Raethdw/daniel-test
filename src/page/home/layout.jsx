import Item from '../../component/item';

const Layout = ({data,totalPages,next,previous,page}) => {
	
	return <div className={'container mx-auto p-4'}>
		
		<div className={'grid grid-cols-6 gap-4 -mx-2'}>
			{data.map((item) => <Item key={item.url.split('/')[6]} item={item} id={item.url.split('/')[6]}/>)}
		</div>
		
		<div className={'grid grid-cols-3 gap-4 -mx-2 m-20'}>
			<div onClick={previous}>previous</div>
			<div>{page+1}/{totalPages}</div>
			<div onClick={next}>next</div>
		</div>
	</div>
	
	
}

export default Layout;

