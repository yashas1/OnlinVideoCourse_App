import React, { Component } from 'react'
import axios from 'axios'

import ReactPlayer from 'react-player'
class Video_player extends Component {

   state={
     
    User_date:[],
    videoRecived:false,
    titleRecived:false

   } 

   componentWillReceiveProps(nextProps)
   {
    if(nextProps!==null)
    {
        this.setState({ videoRecived: true,titleRecived:true });
       
    }

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
        this.setState({User_date: response.data.courseDetails})
       
     }) 
     .catch(err => {
        console.log(err);
     })

   }

    render() {
        const{User_date,videoRecived,titleRecived,}=this.state;
        const{Clicked_title,Clicked_video,Clicked_disc}=this.props;
        
        console.log(Clicked_disc)
        return (
            
            <div className="row">
             <div className="col-12"> 

                <div className="card" style={{marginTop:"30px",marginBottom:"30px",fontFamily:"Arial",fontSize:"20px",color:"#808080",textAlign: "left",padding:"10px",borderRadius:"1.25rem"}}>
               {titleRecived ? Clicked_title : User_date.name}

                </div>  
            <div className="circle" style={{borderRadius:"1.25rem",fontFamily:"Arial",fontSize:"10px"}}><ReactPlayer url= {videoRecived ? Clicked_video : User_date.introVideo} playing /></div>
            <div style={{fontFamily:"Arial",fontSize:"18px",margin:"10px",color:"#808080",textAlign:"left"}}><p>Description</p></div>
            <div className="" style={{fontFamily:"Arial",fontSize:"13px",margin:"20px",color:"#808080",textAlign:"left"}}><p> {titleRecived ? Clicked_disc : User_date.description}</p></div>
            </div>  
        </div>
        )
   

        }
      
}
export default Video_player;