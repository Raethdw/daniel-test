import Item from '../../component/item';

const Layout = ({data}) => {
	
	return <div className={'container mx-auto p-4'}>
		
		<div className={'grid grid-cols-6 gap-4 -mx-2'}>
			{data.map((item) => <Item key={item.url.split('/')[6]} item={item} id={item.url.split('/')[6]}/>)}
		</div>
	</div>
	
	
}

export default Layout;

