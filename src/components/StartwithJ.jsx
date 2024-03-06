import HigherOrderFunctions from "./HigherOrdercomponent";
import React from "react";

class StartwithJ extends React.Component{
    getLetterJ = () => {
        return this.props.userData.filter(name =>name.name[0] === 'J')
    }
    
    
    renderJ = () => {
        const data = this.getLetterJ();
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    
    render(){
        return(
            <>
             <h1>Display Names Starting with J</h1>
            <div className="display-box">
                <ul>{this.renderJ()} </ul>
            </div>
            </>
        )
    }
    
}

export default StartwithJ