import React from 'react';
class Main extends React.Component{
  render(){
    return (
      <div>
          <div className = "row">
            <div className= "col-xs-12">
                <h1> The Main Page </h1>
            </div>
          </div>
          <div className = "row">
            <div className= "col-xs-12">
                <button className="btn btn-primary" onClick= {()=> this.props.changeUserName('Avneet')}> CHANGE USERNAME </button>

            </div>
          </div>


      </div>

    );
  }
}

export default Main;
