import React from 'react'

const Header = () => {
	return (
		<div className="header">
			<div className="background-overlay"></div>
			<div className="container hero-container">
				<div className="hero-title" >
					<h1>Hi, I'm <span>Supriya Amatya</span></h1>
					<h2>Software Engineer Intern at <br /><span>Leapfrog Technology</span></h2>
					<a href="https://www.lftechnology.com/" target="_blank" rel="noopener noreferrer">
					<button className="about-company">About Leapfrog</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
