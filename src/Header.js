import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Resume from './resume'

class Header extends Component {

  render(){
    const profile = Resume.profile
    return(
      <Card>
      <CardHeader
        title={profile.first_name + " " +profile.last_name}
        subtitle={profile.title}
        actAsExpander={true}
        showExpandableButton={true}
        />
        <CardText>{profile.summary}</CardText>
        <CardText expandable={true}>
          
        </CardText>
      </Card>
    )
  }
}


export default Header;
