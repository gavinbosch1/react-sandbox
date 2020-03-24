import React from 'react';
import { useTextfieldContext } from '@/contexts/TextfieldPage';

const TextfieldPage = () => {
	const [name, setName] = useTextfieldContext();

	return (
		<>
			<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
		</>
	);
};

export default TextfieldPage;
