import React, { Component } from 'react'
import Authore_list from './Authore_list'
import Course_list from './Course_list'
import Video_player from './Video_player'
 class Maincomponent extends Component {


   state={

     Clicked_video:[],
     Clicked_title:[],
     Clicked_disc:[]
     
    }

    handleVideoChange=(title,video,disc)=>{
        var title=title;
        var video=video;
        var disc=disc
        
         this.setState({Clicked_video:video,Clicked_title:title,Clicked_disc:disc})
        
       }
     

    render() {
       const {Clicked_title,Clicked_video,Clicked_disc}=this.state;
        return (
         
            <div className="container" style={{padding:"0px"}}>
                 <div className="row main_div">
                      <div className="col-8">
                      <Video_player Clicked_title={Clicked_title}Clicked_video={Clicked_video} Clicked_disc={Clicked_disc} />
                      </div>
                      <div className="col-4">
                      <div className="card" style={{width:"22rem"}}>
            <div className="card-body"style={{padding:"0px"}}>
                   <Course_list selectChapter={this.handleVideoChange} />
             </div>
        </div>
                  
                      </div>


                 </div>

                
                 <div className="row">  
                 <div className="col-12">    
                <Authore_list/>
                </div>
                </div>
            </div>
        )
    }
}

export default Maincomponent