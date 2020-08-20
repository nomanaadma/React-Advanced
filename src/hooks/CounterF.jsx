import React, { useState } from 'react';

function Counterf(props) {
    
    const [ count, setCount] = useState(0);
    const [ name, setName] = useState('');
    
    return (
        <React.Fragment>
            <input type="text" onChange={e => setName(e.currentTarget.value) } />
            <div>{name} has clicked {count} times</div>
            <button onClick={ () => setState(count + 1) }>Increase</button>
        </React.Fragment>
    );
}

export default Counterf;