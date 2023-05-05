import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'




function App() {

  const client = new QueryClient();

  
  return (
    <div className="App">
    <h1>hello</h1>

    <QueryClientProvider client={client}>
     <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}  />
      </Routes>
     </BrowserRouter>
     </QueryClientProvider>
    </div>
  );
}

export default App;
