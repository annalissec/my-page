import "./topbar.scss"
import {} from "feather-icons"

export default function 
() {
  return (
	<div className='topbar'>
		<div className="wrapper">
			<div className="left">
				<a href="#contact" className="logo">annalisse chang</a>
				<div className="itemContainer">
					<i data-feather='user'></i>
				</div>
			</div>

			<div className="right">
				<a href="#portfolio">portfolio</a>
			</div>
		</div>
	</div>
  )
}
