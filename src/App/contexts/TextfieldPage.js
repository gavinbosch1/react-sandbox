import { createContext, useContext } from 'react';

const Context = createContext(null);

export const useTextfieldContext = () => useContext(Context);

export default Context;
