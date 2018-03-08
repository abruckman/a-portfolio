import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';


class Job extends Component{

  render(){

    const details = this.props.job.responsiblities.slice(1).map( (responsiblity, index)=> {
      return(
        <li key={index}>{responsiblity}</li>
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
        <CardText>
        <div>{this.props.job.start_month + " "+this.props.job.start_year}
        {this.props.job.current ? " - now" : " - " + this.props.job.end_month + " " +this.props.job.end_year }
        </div> <br/>
        <div>{this.props.job.responsiblities[0]} </div>
        </CardText>
        <CardText expandable={true}>
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
