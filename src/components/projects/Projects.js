import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/projects.css';
import ProjectList from './ProjectList';

class Projects extends Component {
	render() {
		const projects = this.props;
		// console.log(projects);
		return (
			<div className="projects-section">
				<ProjectList projects={projects.webDesign}/>
				<ProjectList projects={projects.javascript}/>
				<ProjectList projects={projects.final}/>
			</div>
		);
	}
}

const mapStateToProps =(state, ownProps)=>{
  return state
}

export default connect(mapStateToProps)(Projects);
