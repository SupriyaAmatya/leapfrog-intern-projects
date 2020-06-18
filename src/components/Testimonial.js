import React from 'react'
import profile from '../assets/images/profile.jpg'

const Testimonial = () => {
	return (
		<div className="testimonial-section">
			<div className="container">
				<div className="my-testimonial">
					<div className="image-wrapper">
						<img src={profile} width='200' height='200' style={{border:'12px solid #fff', borderRadius:'50%'}} alt=""></img>
					</div>
					<div className ="speech-box">
						<blockquote>My experiences of being an intern in a work enviroment at Leapfrog has been really good. As an intern , I found myself surrounded by mentors who were dedicated to helping me succeed. I was assigned taskes that challenged me and gave me the oppourtunity to put my skills to test in real world. I am grateful to my intern supervisor for welcoming me into their family and preparing me for my professional carreer after graduation.</blockquote>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Testimonial