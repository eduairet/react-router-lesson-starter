import React from "react";
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";

import "./App.css";

const routePaths = {
  about: '/about',
  signUp: '/sign-up',
  articles: '/articles',
  article: '/article',
  categories: '/categories',
  authors: '/authors',
  profile: '/profile'
}

function App() {
  return (
    <Browser>
      <Header />
      <main>
        <Switch>
          {/* Main routes */}
          <Route path={routePaths.about}>
            <About/>
          </Route>
          <Route exact path={routePaths.articles}>
            <Articles articlesPath={routePaths.articles} authorsPath={routePaths.authors} />
          </Route>
          <Route path={routePaths.categories}>
            <Categories />
          </Route>
          {/* Sign-In */}
          <Route path={routePaths.signUp}>
            <SignUp profilePath={routePaths.profile} />
          </Route>
          <Route path={routePaths.profile}>
            <Profile signUpPath={routePaths.signUp}  />
          </Route>
          {/* Param routes */}
          <Route path={`${routePaths.articles}/:title`}>
            <Article />
          </Route>
          <Route path={`${routePaths.authors}/:name`}>
            <Author />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Browser>
  );
}

export default App;
