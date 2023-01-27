import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ThemeProvider } from '@mui/material';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider , InMemoryCache , ApolloClient} from '@apollo/client';

const client = new ApolloClient({
  uri:"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clcyzh3tw3rmt01ujblmybjup/master",
  cache:new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client} >
  
   {/* <ThemeProvider theme={theme}> */}
      <BrowserRouter>
         <App />
     </BrowserRouter>
   {/* </ThemeProvider> */}

  </ApolloProvider>
);
