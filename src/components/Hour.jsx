import { Component } from "react";

class Clock extends Component{

   constructor(props){
      super(props);
      this.state ={
         time : this.getCurrentTime()
      };
   }

   componentDidMount(){
      // Update per second
      this.timerID = setInterval(
         ()=> this.tick(),1000
      )
   }
   componentWillUnmount() {
     
      clearInterval(this.timerID);
    }
    getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString();
    }
   tick(){
      this.setState({
         time: this.getCurrentTime()
      });
   }
   render(){
      return(
         <div className="mx-auto w-full sm:w-[500px] sm:mb-2 sm:my-8 sm:rounded py-8 *:text-2xl bg-slate-700 text-gray-200 text-center">
            <h1>Hour</h1>
            <h2>{this.state.time}</h2>
         </div>
      )
   }
}
export default Clock;
