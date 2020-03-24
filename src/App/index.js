import React, { useState } from 'react';
import AppContext from '@/contexts/App';
import TextfieldContext from '@/contexts/TextfieldPage';
import HomePage from './HomePage';
import TextfieldPage from './TextFieldPage';

const App = () => {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	const [name, setName] = useState('');

	return (
		<>
			<button onClick={() => setCount(count + 1)}>Count {count}</button>
			<button onClick={() => setCount2(count2 + 1)}>Count2 {count2}</button>
			<AppContext.Provider value={{ count: [count, setCount], count2: [count2, setCount2] }}>
				<HomePage />
			</AppContext.Provider>

			<TextfieldContext.Provider value={[name, setName]}>
				<TextfieldPage />
			</TextfieldContext.Provider>
		</>
	);
};

export default App;