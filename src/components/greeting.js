import React from 'react';
// Functional Component with props
function Greeting(props) {
return (
<div>
<p>Hello, {props.name}!</p>
<p>You are {props.age} years old.</p>
</div>
);
}
export default Greeting;