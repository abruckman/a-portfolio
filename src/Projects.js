import React, {Component} from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Resume from './resume'
import Project from './Project'

class Projects extends Component{
  render(){
    const list = Resume.projects
    const projects = list.map( (project, index) =>{
      return(
        <Project key={index} project={project} />
      )
    })

    return(
      <Card>
        <CardMedia
          actAsExpander={true}
          overlay= {<CardHeader
                      title="Projects"
                      actAsExpander={true}
                      showExpandableButton={true}
                    />}

        >
        <img src="projects.png" alt="" />
      </CardMedia>

        <CardText expandable={true}>
          {projects}
        </CardText>
      </Card>
    )
  }
}

export default Projects
