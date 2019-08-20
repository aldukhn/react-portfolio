import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class About extends Component {
  render() {
    
    return(
      
      
      <center><div><h4>Abdulrahman Omar Aldukhn</h4>
      <img
                src="https://infidata.ml/wp-content/uploads/2019/08/me_contactPage.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
      <h4 style={{color: 'grey'}}>Programmer</h4>
      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p><h5> My name is Abdulrahman, and I'm a Full Stack Developer based in Medina

If I'm not cooding, probably I'll be surfing GitHub or Youtube,
learning new technologies and trying new tools and techniques.</h5> </p>

      </div>
      </center>
    )
  }
}

export default About;
