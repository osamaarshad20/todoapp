import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import TodoPage from './components/TodoPage'
import ContactsPage from './components/ContactsPage'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {
    useSelector
} from 'react-redux'


const App = () => {
    let auth = useSelector(state => state.authorized)
    if (!auth) {
        return (
            <div >
                <PageHeader />
                <hr />
                <LoginForm />
            </div>
        )
    } else {
        return (
            <Router >
                <PageHeader />
                <hr />
                <Dashboard />

                <Route path="/todo"
                    component={
                        () => (< TodoPage />)
                    }
                />

                <Route path="/contact"
                    component={
                        () => (< ContactsPage />)
                    }
                />

            </Router>
        )
    }
}

export default App;
