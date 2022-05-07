import React from "react";
import { useSelector } from "react-redux";
import { Route, Link, useRouteMatch, Redirect } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "../features/session/sessionSlice";
import EditProfileForm from "./EditProfileForm";

export default function Profile (props) {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn);

  // call useRouteMatch() to get the url and path
  const { path, url } = useRouteMatch()
  // Even though path and url are the same in this case
  // Use path for relative <Routes/> and url for relative <Links/>
  
  // use loggedIn to return a Redirect
  if (!loggedIn){
    return <Redirect to={props.signUpPath} />
  }
  
  return (
    <main>
      <h1>{currentUser.username}</h1>
      <Link to={`${path}/edit`}>Edit</Link>
      {/* Render a route for EditProfileForm */}
      <Route path={`${url}/edit`}>
        <EditProfileForm />
      </Route>
    </main>
  )
}
