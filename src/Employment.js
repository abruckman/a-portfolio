import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Resume from './resume'



class Employment extends Component{
  render(){
    const history = Resume.employment
    const jobs = history.map(job){
      return(
        <Job job={job}/>
      )
    }

    return(
      <Card>
        <CardHeader>Experience</CardHeader>
        <CardText expandable={true}>
          {jobs}
        </CarText>
      </Card>
    )
  }
}
export default Employment
