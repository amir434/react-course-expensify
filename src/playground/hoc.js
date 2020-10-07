// Higher Order Component
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.information}</p>
    </div>
);


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
         ) : ( 
             <p>Please login!</p>)}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} information="User has been authenticated" test="testing" />, document.getElementById('app'));