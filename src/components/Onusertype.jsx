import HigherOrderFunctions from "./HigherOrdercomponent";
import React from "react";

class Onusertype extends React.Component{
    getDesigners = () => {
        return this.props.userData.filter(user => user.user_type === 'Designer');
    }
    
    
    renderDesigners = () => {
        const data = this.getDesigners();
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
            const age=this.props.name
            return(
                <>
                 <h1>Display based on Designers</h1>
                <div className="display-box">
                    <ul>{this.renderDesigners()} </ul>
                </div>
                </>
                )}
}

export default Onusertype