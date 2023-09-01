import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Blog from './BlogPage/Blog';
import HomePage from './HomePage';
import BookADemo from './BookADemoPage/BookADemo';

{/*
function App() {
  return (
    <>
      <App />
      <HomePage />
      <BookADemo />
      <Blog /> 
    </>
  );


_____________________________________
*/}

const App = () => {
  return (
    <BrowserRouter>
      <Route>
        <>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/"><HomePage /></Link>
                </li>
                <li>
                  <Link to="/page2"><BookADemo /></Link>
                </li>
                <li>
                  <Link to="/page3"><Blog /></Link>
                </li>
                {/* Add more links for additional pages */}
              </ul>
            </nav>

            <Route path="/" exact component={<HomePage />} />
            <Route path="/page2" component={<BookADemo />} />
            <Route path="/page3" component={<Blog />} />
          </div>
        </>
      </Route>
    </BrowserRouter>
  );
}

// const HomePage = () => <Page pageNumber={1} />;
// const BookADemo = () => <Page pageNumber={2} />;
// const Blog = () => <Page pageNumber={3} />;
// Create more components for additional pages

export default App;
