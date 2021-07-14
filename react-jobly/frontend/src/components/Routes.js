import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Homepage from "./navigation/Homepage";
import CompaniesList from "./company/CompaniesList";
import Company from "./company/Company";
import JobsList from "./jobs/JobsList";
import Job from "./jobs/JobCard";
import Login from "./users/Login";
import SignUp from "./users/SignUp";
import Logout from "./users/Logout"
import UserProfile from "./users/UserProfile";
import ProtectedRoute from "./ProtectedRoute"


const Routes = ({ JoblyApi, setAuthed }) => {

    return (
        <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>

            <ProtectedRoute exact path="/companies">
                <CompaniesList JoblyApi={JoblyApi} />
            </ProtectedRoute>

            <ProtectedRoute exact path="/companies/:handle">
                <Company />
            </ProtectedRoute>

            <ProtectedRoute exact path="/jobs">
                <JobsList />
            </ProtectedRoute>

            <ProtectedRoute exact path="/jobs/:name">
                <Job />
            </ProtectedRoute>

            <Route exact path="/login">
                <Login setAuthed={setAuthed} />
            </Route>

            <Route exact path="/signup">
                <SignUp setAuthed={setAuthed} />
            </Route>

            <Route exact path="/logout">
                <Logout setAuthed={setAuthed} />
            </Route>

            <ProtectedRoute exact path="/profile">
                <UserProfile />
            </ProtectedRoute>

        </Switch>
    )
}

export default Routes;