import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';


class Job extends Component{

  render(){

    const details = this.props.job.responsiblities.map( (responsiblity)=> {
      return(
        <li>{responsiblity}</li>
      )
    })
    return(
      <Card>
        <CardHeader
          title={this.props.job.employer}
          subtitle={this.props.job.role}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
         <div>{this.props.job.start_month + " "+this.props.job.start_year}
              {this.props.job.current ? " - now" : " - " + this.props.job.end_month + " " +this.props.job.end_year }
         </div>
         <ul>
          {details}
         </ul>
        </CardText>
      </Card>
    )
  }

}

Job.propTypes ={
  job: PropTypes.object
}

export default Job
