import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

// import Login from './containers/Login'
import { UserProvider } from './hooks/UserContext'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>

    <GlobalStyles />
    <ToastContainer autoClose={1000} theme="colored" />
  </>
)
