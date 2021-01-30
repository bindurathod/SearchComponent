import React,{Component } from 'react';

class Searchbox1 extends Component {

    constructor()
    {
        super()
        this.state={
         SearchData:null,
      
         noData:false,
        }
    }
 search(key)
 {
    console.warn(key)
    fetch("http://localhost:3000/searchbox?q=" + key).then((data) => {
    data.json().then((resp) => {
        console.warn("resp", resp)
        if(resp.length>0)
        {

            this.setState({SearchData:resp})
        }
        else{

            this.setState({noData:true,SearchData:null})
        }
        
       
    }
    
    )

    } )

    
 }



render(){
return(
<div>
    <h1>Searchbox</h1>

    <input type="text" onChange={(event)=>this.search(event.target.value)} />
<div>
{

    this.state.SearchData?

     <div>
    {
        this.state.SearchData.map((item)=>

        <div className="search-row">{item.cuisineType}
        <div>{item.mealType}
        <div>{item.dishType}
        <div>{item.health}
        <div>{item.calories}
        <div>{item.time}
        <div>{item.diet}
        </div>
        </div>
        </div>
        </div>
        </div>
         </div>
        </div>
        
        
        )

    }


</div>


:""
}
{
this.state.noData?<h3>No Data Found</h3>:null

}
</div>
</div>


)


}

}
export default Searchbox1;