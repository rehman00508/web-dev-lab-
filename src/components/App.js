import React from 'react';
import Greeting from './Greeting';
function App() {
return (
<div>
<h1>React Props Example</h1>
{/* Passing props to the child component */}
<Greeting name="John" age={25} />
<Greeting name="Jane" age={30} />
</div>
);
}
export default App;