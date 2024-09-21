
const NavBar = ({ previous,page,totalPages,next}) =>{
	return <div className={'grid grid-cols-3 gap-4 -mx-2 m-20'}>
		<div onClick={previous}>previous</div>
		<div>{page+1}/{totalPages}</div>
		<div onClick={next}>next</div>
	</div>
}

export default NavBar;