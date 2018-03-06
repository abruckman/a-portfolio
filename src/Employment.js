import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
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
        <CardHeader
          title="Experience"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {jobs}
        </CardText>
      </Card>
    )
  }
}
export default Employment
