import React, { useContext } from 'react';
import Context from '@/contexts/App';

const HomePage = () => {
	const { count: [count, setCount], count2: [count2, setCount2] } = useContext(Context);

	return (
		<>
			<h1>Home page</h1>
			<button onClick={() => setCount(count + 1)}>
				Count from Home {count}
			</button>
			<button onClick={() => setCount2(count2 + 1)}>
				Count2 from Home {count2}
			</button>
		</>
	);
};

export default HomePage;