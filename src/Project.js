import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';

class Project extends Component{

  render(){
    const project = this.props.project
    const features = project.features.map( (feature, index ) => {
      return(
        <li key={index}>{feature}</li>
      )
    })
    return(
      <Card>
        <CardHeader
          title={project.name}
          subtitle={project.organization}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          {project.project_url ?
            <div><a href={project.project_url}>website</a></div> : ''
          }
          {project.repo_url ?
            <div><a href={project.repo_url}>Github</a></div>: ''
          }
        </CardText>
        <CardText expandable={true}>
          {features}
        </CardText>
      </Card>
    )
  }

}

Project.propTypes = {
  project: PropTypes.object
}

export default Project
