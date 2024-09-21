import ListLayout from '../list';
import NavBar from '../../component/navbar';

const Layout = ({totalPages,next,previous,page}) => {
	
	return <div className={'container mx-auto p-4'}>
		
		<ListLayout/>
		<NavBar next={next} previous={previous} totalPages={totalPages} page={page}/>
	</div>
	
	
}

export default Layout;

