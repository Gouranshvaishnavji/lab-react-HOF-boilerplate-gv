import React from "react";

// Define the functional component
const DisplayAll = (props) => {
    // Define the function to render items
    const renderItems = (data) => {
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

    // Access props directly as arguments
    const { name } = props; // Destructuring props to get 'name'

    return (
        <>
            <h1>Display all the items</h1>
            <div >
                <ul>{renderItems(name)}</ul>
            </div>
        </>
    );
};

export default DisplayAll;
