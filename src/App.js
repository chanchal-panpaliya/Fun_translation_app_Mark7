import './App.css';
import { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";
import  Facebook  from '@material-ui/icons/Facebook';
import  Twitter  from '@material-ui/icons/Twitter';
import  LinkedIn  from '@material-ui/icons/LinkedIn';
import  GitHub  from '@material-ui/icons/GitHub';
import axios from 'axios';
var serverURL = "https://api.funtranslations.com/translate/chef.json";

class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      gettext:"",
      displaytext:"",
      open:false,
      catchmsg:"",
      errormsg:""
    }

   this.functionDispalyResult = this.functionDispalyResult.bind(this);
  }



  functionDispalyResult(data){
    this.setState({displaytext:data});
  }


  TextTranslateswedishchefspeak=(e)=>{
          var self = this;
           let gettext = this.state.gettext;
           let ServerLink = serverURL+"?"+"text="+gettext;
           console.log("ServerLink",ServerLink)
           axios.get(ServerLink)
            .then(function (response) {
              let data = response.data.contents.translated;
              self.setState({catchmsg:"Text successfully translate to Swedish chef Speak",errormsg:"success",open:true})
                self.functionDispalyResult(data);
            })
            .catch(function (error) {
              self.setState({catchmsg:"The server is restricted to only 5 trials per hour if you encounter an error try again after an hour",errormsg:"error",open:true})
            })
          
  }

  onhandleTextchange=(e)=>{
    this.setState({gettext:e.target.value})
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
     this.setState({open : false})
  };

  Snackbarrender =() =>{
   return(
     this.state.open? <Snackbar open={this.state.open} autoHideDuration={5000}  onClose={this.handleClose} style={{marginTop:'0px',width:'100%'}}>
      <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity={this.state.errormsg} >
        {this.state.catchmsg}
      </MuiAlert>
    </Snackbar> : null
   )
 }

  render(){
    return(
      <div className="container-swedishchefspeak">
          <div className="background-swedishchefspeak">
            <div style={{width:'-webkit-fill-available',position:'fixed'}}>
                <div className="menu__logoSpace"> 
                    <a href="/" className="menu__logo"> Creator Space </a>
                </div>
                <div className="menu__socialItems">
                  <a className="menu__socialLink" target="_blank" href='https://www.facebook.com/chanchal.panpaliya'> 
                    <span className="menu__socialIcon">
                      <Facebook  style={{color:'grey'}}/>
                    </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://twitter.com/CPanpaliya'> 
                     <span className="menu__socialIcon">
                        <Twitter style={{color:'grey'}}/>
                     </span>
                  </a><br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://www.linkedin.com/in/chanchal-panpaliya-0b0436112'> 
                    <span className="menu__socialIcon">
                      <LinkedIn style={{color:'grey'}}/> 
                      </span>
                  </a> <br/><br/>
                  <a className="menu__socialLink" target="_blank" href='https://github.com/chanchal-panpaliya'> 
                    <span className="menu__socialIcon">
                      <GitHub style={{color:'grey'}}/>
                    </span>
                </a>
              </div>
            </div>
          </div>
          <div className="body-frame-swedishchefspeak">
             <div className="heading-swedishchefspeak"> Swedish Chef Speak </div>

                <div className="swedishchefspeak-textarea">
                  <TextField multiline label="Enter your sentence" variant="outlined" rows={6}  style={{width:'70%'}}
                  value={this.state.gettext?this.state.gettext:""} onChange={this.onhandleTextchange} />
                </div>

                <div className="swedishchefspeak-button">
                   <Button variant="outlined" color="primary" onClick={this.TextTranslateswedishchefspeak} disabled={this.state.gettext===""}> Translate To Chefs Language </Button> 
                </div>
                
                <div className="swedishchefspeak-translatetext">
                Translation will come here 👇
                </div>

                <div className="swedishchefspeak-displayresult">
                   <TextField multiline rows={4}  variant="filled" style={{width:'70%'}} value={this.state.displaytext ? this.state.displaytext:""} type="text" disabled/>
                </div>
                <div className="fotter-swedishchefspeak">
                  About:-
                  Convert from English to Swedish chef Speak. 
                  The Swedish Chef is a Muppet character that appeared on The Muppet Show. The Swedish Chef does not speak any known language, 
                  but his nonsense words are so widley interpreted as Swedish-sounding.
                </div>
           </div>   
              
          {this.Snackbarrender()}
      </div>
    )
  }
}

export default App;

