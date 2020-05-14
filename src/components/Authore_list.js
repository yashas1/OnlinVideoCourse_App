import React, { Component } from 'react'
import axios from "axios"
 class Authore_list extends Component {
 
    state={
     
        Authore_date:[]
    
       }
    
       componentDidMount()
       {
        axios({
            url: 'https://stgapi.omnicuris.com/api/v3/courses/thyroid-in-pregnancy/experts',
            method: 'get',
            headers: {
                'hk-access-token': '89e684ac-7ade-4cd8-bbdf-419a92f4cc5f'
                
            }
         })
         .then(response => {
            this.setState({Authore_date: response.data.expertDetails})
            
         }) 
         .catch(err => {
            console.log(err);
         })
    
       }

      

       render() {
        var cardContainer = {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          maxWidth: "496px",
          margin: "0 auto",
          padding: "9px",
          backgroundColor: "rgb(95, 95, 255)"
          }

          var Card ={
            width: "100px",
            height: "140px",
            margin: "12px",
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "0 0 12px rgb(63, 63, 63"
            }
        const{Authore_date}=this.state 
     
        return (
            <div className="row" >
           <div className="col-12" style={{fontFamily:"Arial",fontSize:"32px",color:"Gray",textAlign: "left" ,paddingBottom:"25px"}}>
               Expert Panel

           </div>

        {Authore_date.map(Authore=> (
          <div key={Authore.id} className="col-2">
         
      
              <div className="card" style={{width: "08rem",border:"1px solid rgba(0,0,0,0)"}}>
                 
                     <img  className="card-img-top rounded" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) "}} src= {Authore.profilePic}></img>
                     <div className="card-body" style={{height:"80px"}}>
                     <div className="card-title" style={{fontFamily:"Arial",fontSize:"14px",color:"#1569C7" }}><b>{Authore.title}{Authore.expertName} </b> </div>
                  
                 <p className="card-text" style={{fontFamily:"Arial",fontSize:"12px",color:"red"}}>{Authore.qualification}</p>        
                 </div>
                 </div>
                 </div>
 
        ))}
        </div>
         

         
            
        )
   

        }
}
export default Authore_list;