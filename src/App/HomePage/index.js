import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/contexts/App';
import HomePageContext from '@/contexts/HomePage';
import List from './List';

const HomePage = () => {
	const { count: [count, setCount], count2: [count2, setCount2] } = useAppContext();

	const [list, setList] = useState([]);

	useEffect(() => {
		console.log('Çomponent rerendered');
	});

	useEffect(() => {
		console.log('Çomponent did mount');
	}, []);

	useEffect(() => {
		console.log('Runs only if count changes or comp did mount');
	}, [count]);

	useEffect(() => {
		setTimeout(() => {
			setList([{ label: 'John doe' }, { label: 'Jane doe ' }]);
		}, 5000);
	}, []);

	return (
		<>
			<h1>Home page</h1>
			<button onClick={() => setCount(count + 1)}>
				Count from Home {count}
			</button>
			<button onClick={() => setCount2(count2 + 1)}>
				Count2 from Home {count2}
			</button>

			<HomePageContext.Provider value={list}>
				<List />
			</HomePageContext.Provider>
		</>
	);
};

export default HomePage;