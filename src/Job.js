import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PropTypes from 'prop-types';


class Job extends Component{

  render(){
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
              
         </div>
        </CardText>
      </Card>
    )
  }

}

Job.propTypes ={
  job: PropTypes.object
}

export default Job
