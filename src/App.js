import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
class App extends Component {
 constructor(props){
   super(props)
   this.state={
     name:" ",
     age:""
   }
 }
 getData = (e)=>{
   e.preventDefault()
   fetch('http://localhost:3001/data')
   .then(res=>res.json())
   .then(resData => {
     console.log(resData)
     this.setState({
       name:resData[0].name,
       age:resData[0].age
     })
   }
   )}
 postData = (e)=>{
   e.preventDefault()
   fetch('http://localhost:3001/data')
   }
 render(){
   return(
     <div>
       <Zoom>
       <center>
       <Flip>
         <h3>My Cats List MySQL</h3>
       </Flip>
       <form style={{flex:1 , flexDirection:'row'}}>
         <input
           type = 'text'
           id = "name"
           placeholder = "이름"
          //  ref ={age=>this.input.age}
         />
         <input
           type = 'text'
           id = "age"
           placeholder = "나이"
          //  ref ={age=>this.input.age}
         />
         <button
         style={{width:'100px', height:'20px'}}
         onClick={this.postData.bind(this)}
         >강아지 등록</button>
         <button
         style={{width:'100px', height:'20px'}}
         onClick={this.getData.bind(this)}
         >강아지 조회</button>
       </form>
       </center>
       </Zoom>
     <Zoom>
       <center>
       <h1><span>{this.state.name}의 나이는 {this.state.age}살</span></h1>
       </center>
     </Zoom>
     </div>
   )
 }
}
export default App;

