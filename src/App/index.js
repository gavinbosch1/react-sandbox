import React, { useState } from 'react';
import Context from '@/contexts/App';

const App = () => {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	return (
		<>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
			<button onClick={() => setCount2(count2 + 1)}>Count2 {count2}</button>

			<Context.Provider value={[count, setCount]}>
				<h1>Hello world</h1>
			</Context.Provider>
		</>
	);
};

export default App;