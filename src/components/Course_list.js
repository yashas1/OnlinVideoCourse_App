import React, { Component } from 'react'
import axios from 'axios'
import Chapters from "./Chapters"
class Course_list extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state={
     
    User_data:[],
    ModuleID:[],

   }

    componentDidMount()
       {
        axios({
            url: 'https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy',
            method: 'get',
            headers: {
                'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'
                
            }
         })
         .then(response => {
            this.setState({User_data: response.data.courseDetails.modules})
           
         }) 
         .catch(err => {
            console.log(err);
         })
    
       }
   
       handleChange=(e)=>{
          this.setState({ModuleID:e})
           
       }
      
       handleVideoChange=(veideo,title,disc)=>{
         var title=title;
         var veideo=veideo;
         var disc= disc;
         this.props.selectChapter(veideo,title,disc)
          
        }
   

    render() {
        const{User_data,ModuleID}=this.state ;
        

  
         let duration=[];
         let course_name=[];
         let profile_pic=[];
         
         User_data.map(User=>{
         
            duration.push(User.duration);
            course_name.push(User.name);
            profile_pic.push(User.moduleExperts[0].profilePic) 

         })
         
      
   
        return (
            <div>
            
              <div style={{fontSize:"15px",fontFamily:"Arial",color:"#808080"}}><b>Expert Modules</b></div>
              <ul className="Coureul"style={{listStyleType: "none",paddingLeft:"10px",height:"280px"}}>

               {User_data.map(User_data => (
                
                     <li style={{paddingTop:"10px"}}value={User_data.id} key={User_data.id} onClick={e=>this.handleChange(User_data.id)}>
                     <div className="card" style={{width:"19rem" ,borderRadius:"1.25rem",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) "}}>
                 <div className="card-body" style={{padding:"0px",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) "}}>
                     <img  className="rounded-circle" src={User_data.moduleExperts[0].profilePic} style={{width:'45px'}}></img>
       
                     <div style={{fontFamily:"Arial",fontSize:"10px",color:"#1569C7" }}><span style={{color:"#ff3399"}}><b>{User_data.title}-</b></span><b>{User_data.name}</b> </div>
                  
                 <div style={{fontFamily:"Arial",fontSize:"15px" ,color:"#7575a3" }}><i className="fa fa-clock-o" style={{color:"#3399ff"}}></i>    {User_data.duration} </div>
                 
                 
                 </div>
                 </div>
              
                 </li>
               ))}

        
               </ul>
               <div style={{padding:"12px"}}></div>
               <Chapters ModuleID={ModuleID} selectChapter={this.handleVideoChange}/>
            </div>
        )
    }
}
export default Course_list;