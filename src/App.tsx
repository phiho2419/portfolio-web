import React, { useContext, useEffect } from 'react';
import { AppContext } from './Context';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import MainWrapper from './Components/MainWrapper';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';


function App() {
  const context = useContext(AppContext);
  const changeLoading = async () => {
    context.setLoading(true);
    console.log(context.loading);
  }
  useEffect(() => {
    changeLoading()
  }, [context]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainWrapper>
            <Home />
          </MainWrapper> } />
          <Route path="/about" element={<MainWrapper>
            <About />
          </MainWrapper> } />
          <Route path="/portfolio" element={<MainWrapper>
            <Portfolio />
          </MainWrapper> } />
          <Route path="/contact" element={<MainWrapper>
            <Contact />
          </MainWrapper> } />
          <Route path="/blog" element={<MainWrapper>
            <Blog />
          </MainWrapper> } />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function PageNotFound(){
  return <div>Page not found!</div>
}

export default App;
