import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Tinder Swiping UI react</CardTitle>
            <CardText>
            Tinder Swiping UI react using Expo libraries
            </CardText>
            <CardActions border>
              <Button a href="https://github.com/aldukhn/Tinder_Swiping-react" colored>GitHub</Button>
              {/* <Button a href="https://infidata.ml/" colored>CodePen</Button> */}
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Snapchat Camera Ui react</CardTitle>
            <CardText>
            Snapchat Camera Ui react native and Expo
            </CardText>
            <CardActions border>
              <Button a href="https://github.com/aldukhn/Snapchat-Camera-Ui" colored>GitHub</Button>
              {/* <Button a href="https://infidata.ml/" colored>CodePen</Button> */}
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

         
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Ruby</h1>
        
        {/* rails-rest-api */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/ruby.svg) center / cover'}} >rails rest api</CardTitle>
            <CardText>
            SIMPLE RAILS 5 REST API
            </CardText>
            <CardActions border>
              <Button a href="https://github.com/aldukhn/rails-rest-api" colored>GitHub</Button>
              {/* <Button a href="https://infidata.ml/" colored>CodePen</Button> */}
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
        
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is PHP</h1>
        
          {/* PHP 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/php.svg) center / cover'}} >employees management</CardTitle>
            <CardText>
            Simple employees management using mysql and PHP
            </CardText>
            <CardActions border>
              <Button a href="https://github.com/aldukhn/Emp_mngmt" colored>GitHub</Button>
              {/* <Button a href="https://infidata.ml/" colored>CodePen</Button> */}
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is Java</h1>

        {/* Java 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/android.svg) center / cover'}} >Uber Clone </CardTitle>
            <CardText>
            Uber clone using Java for android and adding firebase DB 
            </CardText>
            <CardActions border>
              <Button a href="https://github.com/aldukhn/ubery" colored>GitHub</Button>
              {/* <Button a href="https://infidata.ml/" colored>CodePen</Button> */}
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        

        </div>
      )
    }

    else if(this.state.activeTab === 4) {
      return (
        <div><h1>Others projects</h1>

        {/* other 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg) center / cover'}} > openweathermap Api </CardTitle>
            <CardText>
            openweathermap Api Using javascript 
            </CardText>
            <CardActions border>
              <Button a href="https://github.com/aldukhn/ubery" colored>GitHub</Button>
              {/* <Button a href="https://infidata.ml/" colored>CodePen</Button> */}
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab> Ruby </Tab>
          <Tab> PHP </Tab>
          <Tab> Java </Tab>
          <Tab> Other </Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
