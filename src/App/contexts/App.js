import { createContext, useContext } from 'react';

const Context = createContext(null);

export const useAppContext = () => useContext(Context);

export default Context;