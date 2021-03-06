import { React, useEffect } from "react"
import { Route, Switch } from "react-router"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

import { cookiesUser } from "./store/user"
import "./App.css"

import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "bootstrap/dist/css/bootstrap.min.css"

import ProductView from "./components/ProductView"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Footer from "./components/Footer"
import "./styles/global.module.css"
import NotFound from "./components/NotFound"
import DataTableTemplatingDemo from "./components/Cart"
import CategoriesProduct from "./components/CategoriesProduct"
import Categories from "./containers/Categories"
import ReviewView from "./components/Reviews"
import Comics from "./containers/Comics"
import EditComicForm from "./components/EditComicForm"
import NewComicForm from "./components/NewComicForm"
import History from "./components/History"
import UsersAdminContainer from "./containers/UsersAdminContainer"

function App() {
  const dispatch = useDispatch()
  const isAdmin = useSelector(state => state.user.isAdmin)

  useEffect(() => {
    axios
      .get("api/me")
      .then(res => res.data)
      .then(user => {
        dispatch(cookiesUser(user))
      })
  }, [dispatch])

  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/cart" component={DataTableTemplatingDemo} />
        <Route
          path="/comic/:id"
          render={({ match }) => <ProductView comicId={match.params.id} />}
        />
        <Route path="/category/:CategoriesProduct" component={CategoriesProduct} />
        {isAdmin && <Route path="/categories" component={Categories} />}
        {isAdmin && <Route exact path="/comics" component={Comics} />}
        {isAdmin && <Route path="/comics/edit/:id" component={EditComicForm} />}
        {isAdmin && <Route path="/comics/new" component={NewComicForm} />}
        {isAdmin && <Route path="/users" component={UsersAdminContainer} />}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/review" component={ReviewView} />
        <Route path="/history" component={History}/>
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

// recordar poner solo para admin la ruta de comics

export default App
