import "./topbar.scss"
import {FiPhone, FiMail} from 'react-icons/fi'


export default function Topbar({ openMenu, setOpenMenu }) {
  return (
	<div className={"topbar " + (openMenu && "active")}>
		<div className="wrapper">
			<div className="left">
				<a href="#contact" className="logo">annalisse chang</a>
				<div className="itemContainer">
					<FiPhone className="icon"/>
					<span> (352) - 321 - 7657</span>
				</div>
				<div className="itemContainer">
					<FiMail className="icon"/>
					<span> annalissechang@gmail.com </span>
				</div>
			</div>

			<div className="right">
				<div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
					<span className="line1"></span>
					<span className="line2"></span>
					<span className="line3"></span>
				</div>
			</div>
		</div>
	</div>
  )
}
