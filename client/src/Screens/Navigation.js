import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'
import AddBook from './AddBook'
import AdminDashboard from './AdminDashboard'
import CreateAccountScreen from './CreateAccount'
import Login from './Login'
import NotFoundScreen from './NotFound'
import UserDashboard from './UserDashboard'

// eslint-disable-next-line no-unused-vars
const PrivateRoute = () => {
    const auth = useAuth()

    return auth.user === null ? <Navigate to='/login'/> : <Outlet/>
}

const Navigation = (props) => {
    const auth = useAuth()

    return(
        <Router>
            <Routes>
                <Route exact path='/create-account' element={<CreateAccountScreen/>}/>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/' element={<UserDashboard/>}/>
                <Route exact path='/add-book' element={<AddBook/>}/>
                <Route exact path='/admin' element={<AdminDashboard/>}/>
            </Routes>
        </Router>
    )
}

export default Navigation