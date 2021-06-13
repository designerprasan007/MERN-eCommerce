import './SideNav.css'
const SideNav = ({currentTab}) =>{
	return(
		<div className="mainSide">
			<ul className="list-group text-center sideUL">
			  <li onClick={(e) => currentTab(e)} className="active list-group-item sidenavlist p-3">
			  	<h3 className="sideNavCursor" id="Overview">Overview</h3>
			  </li>
			  <li onClick={(e) => currentTab(e)} className="list-group-item sidenavlist p-3">
			  	<h3 className="sideNavCursor" id="Stores">Stores</h3>
			  </li>
			  <li onClick={(e) => currentTab(e)} className="list-group-item sidenavlist p-3">
			  	<h3 className="sideNavCursor" id="Products">Products</h3>
			  </li>
			  <li onClick={(e) => currentTab(e)} className="list-group-item sidenavlist p-3">
			  	<h3 className="sideNavCursor" id="Daily">Daily Graph</h3>
			  </li>
			  <li onClick={(e) => currentTab(e)} className="list-group-item sidenavlist p-3">
			  	<h3 className="sideNavCursor" id="TodaySales">Today's sales</h3>
			  </li>
			</ul>
		</div>
		)
}

export default SideNav