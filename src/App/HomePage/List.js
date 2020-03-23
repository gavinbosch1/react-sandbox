import React from 'react';
import { useHomePageContext } from '@/contexts/HomePage';

const List = () => {
	const list = useHomePageContext();

	return (
		<>
			<ul>
				{list.map((item, i) => (
					<li key={`${i}`}>{item.label}</li>
				))}
			</ul>
		</>
	);
};

export default List;