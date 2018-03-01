import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
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
          <div className="contact"><i className="material-icons">mail_outline</i> <a targent="_blank" href="{profile.email}">{profile.email}</a></div>
          <div className="contact"><i className="material-icons">phone</i> {profile.phone} </div>
          <div className="contact"> G <a target="_blank" href="{profile.github}">{profile.github}</a></div>
          <div className="contact"> Li <a target="_blank" href="{profile.linkedin}">{profile.linkedin}</a></div>
          <div className="contact"></div>
          <div className="contact"></div>
        </CardText>
      </Card>
    )
  }
}


export default Header;
