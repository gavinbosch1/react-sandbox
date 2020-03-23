import React from 'react';

const Context = React.createContext([]);

export const useHomePageContext = () => React.useContext(Context);

export default Context;