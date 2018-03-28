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
        />
        <CardText>{profile.summary}</CardText>
        <CardText >
          <div className="contact">
            <a targent="_blank" href={'//'+profile.email}>
              <div className="contact-logo"> <i className="material-icons">mail_outline</i></div>
            {profile.email}</a>
          </div>
          <div className="contact">
            <div className="contact-logo"><i className="material-icons">phone</i></div>
            {profile.phone}
           </div>
          <div className="contact"><a target="_blank" href={'//'+profile.github}><div className="contact-logo"> <img className="contact-icon" alt='github logo' src='GitHub-Mark-32px.png'/></div> {profile.github}</a></div>
          <div className="contact"><a target="_blank" href={"//" + profile.linkedin}> <div className="contact-logo"> <img alt='linkedin' src='In-2CRev-21px-R.png'/></div> {profile.linkedin}</a></div>
        </CardText>
      </Card>
    )
  }
}


export default Header;
