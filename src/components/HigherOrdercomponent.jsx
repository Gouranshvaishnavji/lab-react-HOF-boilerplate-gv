import React from "react";
import Displayall from "./Displayall.jsx";
import Onusertype from "./Onusertype.jsx";
import StartwithJ from "./StartwithJ.jsx";
import Getage from "./Getage.jsx";
class HigherOrderFunctions extends React.Component{
    constructor(){
        super()
        this.state = {
            userData: [
                { id: '1', name: 'Jhh', user_type: 'Developer', age:311, years:11 },
                { id: '2', name: 'jhh', user_type: 'Designer', age:269, years:54 },
                { id: '3', name: 'den', user_type: 'Teacher', age:214, years: 2},
                { id: '4', name: 'fridge', user_type: 'Entreprenuer', age:528,years:25},
                { id: '5', name: 'dean', user_type: 'Designer', age:443, years: 18}
            ]
        }
    }
    getTotalExperience = () => {
        const designers = this.state.userData.filter(user => user.user_type === 'Designer');
        const years = designers.map(designer => designer.years);
        const totalExperience = years.reduce((total, year) => total + year, 0);

        return totalExperience;
    }
    
       
renderItems = () => {
    const data = this.getAge();
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                <span>Id: {item.id}</span>
                <span> ,Ser Name : {item.name}</span>
                <span>, User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};
    render(){
        return(
            <>
            <div className="display-all">
             <Displayall name={this.state.userData}/>  
            </div> 
            <div className="onusertype">
            <Onusertype type={this.state.userData} userData={this.state.userData}/>
            </div>
            <div className="startwith-j">
                <StartwithJ type={this.state.userData} userData={this.state.userData}/>
            </div>
            <div className="startwith-j">
                <StartwithJ type={this.state.userData} userData={this.state.userData}/>
            </div>
            <div className="getage">
                <Getage type={this.state.userData} userData={this.state.userData}/>
            </div>
            <h2>Display all based on Age</h2>
            <div className="display-box">
                <ul className="list-elements">{this.getTotalExperience()} </ul>
            </div>
            </>
        )
    }
}

export default HigherOrderFunctions