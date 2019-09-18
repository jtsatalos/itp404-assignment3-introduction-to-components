import React from 'react';
import Loading from './Loading';
import './App.css';
import { memberExpression } from '@babel/types';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }
let subscribers = "";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      loading: true
    };
  }
  async componentDidMount() {
    let response = await fetch('https://www.reddit.com/r/javascript.json');
    let members = await response.json();
    console.log(members.data.children)
    this.setState({ members: members.data.children, loading: false });
    console.log(members.data.children[0].data.score)
   

    
    
    
    // let subscribers = members.data.children[0].data.subreddit_subscribers
  }
  
  render() {
    return (
      // let count = 0
     
      
      <div>
        <h1>Javascript Subreddit</h1>
     
        {this.state.members.map((member) => {
          subscribers = member.data.subreddit_subscribers
        })}
        <h2>Subscribers: {subscribers}</h2>
        <div>
          {this.state.loading ? <Loading /> : this.state.members.map((member) => {
            let bob = member.data.ups
            let thebob = bob.toLocaleString()
            if(member.data.num_comments) {
              return (
              <div>
                <br></br> 
                <a href ={member.data.url}target="_blank">{member.data.title}</a>
                <br></br>
                Author: {member.data.author}
                <br></br>
                Score: {thebob} 
                <br></br>
                Comments: {member.data.num_comments}
                <br></br>
              </div> )
            }
            else {
              return (
              <div>
                <br></br> 
                <a href ={member.data.url}target="_blank">{member.data.title}</a>
                <br></br>
                Author: {member.data.author}
                <br></br>
                Score: {thebob} 
                <br></br> 
              </div> )
            }
              
            //    html +=
            //    `
            //    <br>Title: <a href="${member.data.url}target="_blank">${member.data.title}</a></br>
            //    <br>Score: ${member.data.score}</br>
            //    <br>Author: ${member.data.author}</br>
            //    <br></br>
            //    `
            //  return member.data.title +  member.data.author + "\n"
          })}
          
        </div>
      </div>
    );
  }
}

export default App;
