import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';

class Project extends Component{

  render(){
    const project = this.props.project
    const features = project.features.slice(1).map( (feature, index ) => {
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
          {project.product_url ?
            <div className="contact-icon"><a href={project.product_url}><i class="material-icons">public</i></a></div> : ''
          }
          {project.repo_url ?
            <div className="contact-icon"><a href={project.repo_url}><img className="contact-icon" alt='github logo' src='GitHub-Mark-32px.png'/></a></div>: ''
          }
          <br />

          <div>{project.features[0]}</div>
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
