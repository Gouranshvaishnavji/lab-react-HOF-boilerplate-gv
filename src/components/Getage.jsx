import React from "react";

const Getage = (props) => {
    // Define the function to get age
    const getAge = () => {
        return props.userData.filter(user => user.age > 28 && user.age <= 50);
    };

    // Define the function to render age
    const renderAge = () => {
        const data = getAge();
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


    return (
        <>
            <h1>Age greater than 28 and less than 50</h1>
            <div >
                <ul>{renderAge()}</ul>
            </div>
        </>
    );
};

export default Getage;
