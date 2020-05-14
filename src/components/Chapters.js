import React, { Component } from 'react'
import axios from 'axios'
 class Chapters extends Component {

	constructor(props){
        super(props)
       
           this.state={
             ModuleID:"",
             User_data:[]
             
   
           }
       }
       componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.ModuleID !== this.state.ModuleID) {
          this.setState({ ModuleID: nextProps.ModuleID });
         console.log(nextProps.ModuleID)

          axios({
            url: `https://stgapi.omnicuris.com/api/v3/courses?courseSlug=thyroid-in-pregnancy&moduleId=${nextProps.ModuleID}`,
            method: 'get',
            headers: {
                'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'
                
            }
         })
         .then(response => {
            
            this.setState({User_data: response.data.lessonDetails})
         }) 
         .catch(err => {
            console.log(err);
         })
    
       }
   



        }

        handleVideoChange=(e,y,z)=>{
         var title=y;
         var videoURl=e;
         var disc=z;
         this.props.selectChapter(title,videoURl,disc)
          
        }

    render() {
        const{ModuleID,User_data}=this.state ;
        let profile_pic=[];
        let chapter_video=[];
        let chapter_title=[];
       console.log(User_data)
        User_data.map(x=>{
          x.userChapterDetails.map(y=>{
          y.chapterExperts.map(z=>{
            profile_pic=z.profilePic
          

          })
              

          })

        })
    
        return (
            <div>
            <ul className="Chapter" style={{listStyleType: "none",paddingLeft:"10px"}}>
            <li style={{fontSize:"15px",fontFamily:"Arial",color:"#808080"}}><b>Chapter Details</b></li>
{User_data.map(x => (
  x.userChapterDetails.map(y=>(

    <li style={{paddingTop:"10px"}} key={y.id} onClick={e=>this.handleVideoChange(y.content,y.title,y.slug)}>
      <div className="card" style={{width:"17rem" ,borderRadius:"1.25rem"}}>
  <div className="card-body" style={{padding:"0px"}}>
      <img  className="rounded-circle" src={profile_pic} style={{width:'45px'}}></img>

      <div style={{fontFamily:"Arial",fontSize:"10px",color:"#1569C7" }}><span style={{color:"#ff3399"}}><b>{y.title}-</b></span><b>{y.name}</b> </div>
   
  {/* <div style={{fontFamily:"Arial",fontSize:"15px" ,color:"#7575a3" }}><i className="fa fa-clock-o" style={{color:"#3399ff"}}></i>    {User_data.duration} </div> */}
  
  
  </div>
  </div>
  </li>



  )





  )
     
))}


</ul>
            </div>
        )
    }
}

export default Chapters;