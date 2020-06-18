import React, { Component } from 'react';

class ProjectList extends Component {
  state = {
    showMore: false
  }

  handleClick = () => {

    this.setState({
      showMore: !this.state.showMore
    })
  }

  render() {
    const grey = this.props.projects.bgGrey ? ('grey-bg') : '';

    const projects = this.props.projects.projects;
    // console.log(projects.length);
    const projectList = projects ? (
      projects.map(project => {
        const reverse = project.id % 2 === 0 ? ('row-reverse') : '';
        return (
          <div className={'row ' + reverse} key={project.id}>
            <div className="col-info">
              <div className="project-wrapper__text">
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">View Demo</a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
            <div className="col-image">
              <div className="project-wrapper__image" >
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <div className="img-thumbnail">
                    <img src={project.imgSrc} alt=""></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )
      })
    ) : null

    const numberOfItems = this.state.showMore ? projects.length : 2
    const hide = projectList.length === 1 ? 'hide' : '';
    return (
      <div className={'project-wrapper ' + grey}>
        <div className="container">
          <h2 className="main-title">{this.props.projects.mainTitle}</h2>
          {projectList.slice(0, numberOfItems)}
          <div className={"btn__show-more " + hide}>
            <button onClick={this.handleClick}>
              {this.state.showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>

        </div>
      </div>
    );
  }
}

export default ProjectList;