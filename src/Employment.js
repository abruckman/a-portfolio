import React, {Component} from 'react';
import {Card, CardHeader,CardMedia, CardText} from 'material-ui/Card';
import Resume from './resume'
import Job from './Job'



class Employment extends Component{
  render(){
    const history = Resume.employment
    const jobs = history.map( (job, index) => {
      return(
        <Job key={index} job={job}/>
      )
    })

    return(
      <Card>
        <CardMedia
          actAsExpander={true}
          overlay= {<CardHeader
                      title="Experience"
                      actAsExpander={true}
                      showExpandableButton={true}
                    />}
        >
          <img src="projects.png" alt="" />
        </CardMedia>
        <CardText expandable={true}>
          {jobs}
        </CardText>
      </Card>
    )
  }
}
export default Employment
