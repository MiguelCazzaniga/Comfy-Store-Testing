import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth0()

  if (!user) {
    return <Navigate to='/' />
  }
  return children
 }
 export default PrivateRoute
// import React from "react"
// import { Route, Navigate } from "react-router-dom"
// import { useAuth0 } from "@auth0/auth0-react"

// const PrivateRoute = ({ children, ...rest }) => {
//   const { user } = useAuth0()
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         return user ? children : <Navigate to='/'></Navigate>
//       }}
//     ></Route>
//   )
// }
// export default PrivateRoute
