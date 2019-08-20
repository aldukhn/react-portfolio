import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://infidata.ml/wp-content/uploads/2019/08/me_resumePage.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Abdulrahman Omar Aldukhn</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> My name is Abdulrahman, and I'm a Full Stack Developer based in Medina

If I'm not cooding, probably I'll be surfing GitHub or Youtube,
learning new technologies and trying new tools and techniques. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Medina Saudi Arabia</p>
            <h5>Phone</h5>
            <p>+966 505138156</p>
            <h5>Email</h5>
            <p>abd.aldukhn@gmail.com</p>
            <h5>Web</h5>
            <p>https://infidata.ml/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2015}
              endYear={2019}
              schoolName="osmania university"
              schoolDescription="BCA In Nizam College"
               />

              

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="FreeLincer"
              jobDescription="FreeLincer Web and Android/react dev"
              />

              
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                  <Skills
                    skill="Java/kotlin"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={70}
                      />
                      <Skills
                      skill="Ruby"
                      progress={35}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
