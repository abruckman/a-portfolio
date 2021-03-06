import React, {Component} from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Resume from './resume'
import WordCloud from 'react-d3-cloud';



class Skills extends Component{

  render(){
    const skills = Resume.skills
    console.log(skills)
    // const names = Object.keys(skills)
    const array = Object.entries(skills)
    console.log(array)
    const data = array.map(function(pair){
      return({text: pair[0], value: pair[1]})
    })
    console.log(data)
    const values  = word => Math.log2(word.value) * 7;


    return(
      <Card>
      <CardMedia
        actAsExpander={true}
        overlay= {<CardHeader
                    title="Skills"
                    actAsExpander={true}
                    showExpandableButton={true}
                  />}
      >
      
        <img src="skills.png" alt="" />
      </CardMedia>
        <CardText expandable={true}>
          <div className="skill-card">
            <WordCloud
              data={data}
              fontSizeMapper={values}
              width={380}
              height={300}
            />
          </div>
        </CardText>
      </Card>
    )
  }
}

export default Skills;
