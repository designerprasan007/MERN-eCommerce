import './SideNav.css'
const SideNav = ({activeTab, setActiveTab, tabs}) =>{
	return(
		<div className="mainSide">
			<ul className="list-group text-center sideUL">
			{tabs.map((textval, i) => {
            const classes = ["sideNavCursor"];
            if (i === activeTab) classes.push("active");
				return (
				<li
					key={i}
					className={classes.join(" ")}
					onClick={() => setActiveTab(i)}
				>
				<h3 className="sideNavCursor" id={textval}>{textval}</h3>
				</li>
				);
        	})}
		</ul>
		</div>
		)
}

export default SideNav