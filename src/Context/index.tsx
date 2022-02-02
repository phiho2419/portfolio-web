import React, { Children, useState } from 'react';

const defaultState = {
    loading: false,
    setLoading: (status: boolean) => {},
}

const AppContext = React.createContext(defaultState);

function AppProvider(props: any) {
  
    const [loading, setGlobalLoading] = useState<boolean>(defaultState.loading);
    const setLoading = (status: boolean) => setGlobalLoading(status);
  
    return (
      <AppContext.Provider
        value={{
          loading,
          setLoading
        }}
      >
        {Children.toArray(props.children)}
      </AppContext.Provider>
    );
  }
  
  export { AppContext, AppProvider };