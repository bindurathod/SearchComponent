import React, { Component } from 'react';
class Searchlist extends Component{
constructor()
{
    super();
    this.state ={

        list:null,
    }
}
componentDidMount(){

fetch("http://localhost:3000/Searchbox").then((response) => {

response.json().then((result) => {
    
    this.setState({list:result})
})
})
}
render(){
    
return(
    <div>
        <h1> Search List</h1>

        {
            this.state.list?
            <div>
                {
                this.state.list.map((item,i) =>
                   <div className="list-wrapper">
                    <span>{item.cuisineType}</span>
                    <span>{item.mealType}</span>
                    <span>{item.dishType}</span>
                    <span>{item.health}</span>
                    <span>{item.calories}</span>
                    <span>{item.time}</span>
                   <span>{item.diet}</span>
                    

                       </div>)
                }
                </div>
            
                :<p>Please Wait...</p>
        }
    </div>
);

}



}
export default Searchlist