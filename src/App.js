import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import BlogPost from './BlogPost';

function App() {
  const [isBlogVisible, setIsBlogVisible] = useState(false);

  const handleNavClick = (page) => {
    if (page === 'writing') {
      setIsBlogVisible(true);
    } else {
      setIsBlogVisible(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Emma Witmer</h1>
          <nav>
            <Link to="/" onClick={() => handleNavClick('home')}>home</Link>
            <Link to="/writings" onClick={() => handleNavClick('writing')}>writing</Link>
            <a href="https://www.canva.com/design/DAGI58EiplM/AuhfyFqCrIFooh_H6DhvwA/view?utm_content=DAGI58EiplM&utm_campaign=designshare&utm_medium=link&utm_source=editor">resume</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <section>
              <h2>About</h2>
              <p>
                Hi, I’m Emma! I am an incoming first-year business student at University of Illinois Urbana-Champaign and aspire to work as a financial analyst. I was born and raised in the Chicago area as a homeschool student. In high school, I co-led my policy debate team, spearheaded community service projects with my Girl Scout troop, and took full-time classes at Harper College. In my free time, I like to code, lift weights, listen to an excessive amount of political and financial podcasts, make dad jokes, and research investments that I can't afford (yet).
              </p>
              <p>
                I’m always happy to meet and chat with people! You can reach me through <a href="https://www.linkedin.com/in/emma-witmer-4070b82a1/">LinkedIn</a> or email me at emmswitmer@gmail.com.
              </p>
              <p><em>June 2024</em></p>
            </section>
          } />
          <Route path="/writings" element={<Blog />} />
          <Route path="/post/:id" element={<BlogPost />} />
        </Routes>
        <footer>
          <p>&copy; 2024 Emma Witmer. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
