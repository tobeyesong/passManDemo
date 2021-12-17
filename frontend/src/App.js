/** @format */
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import history from "./history";

import DashboardScreen from "./components/screens/DashboardScreen";
import PasswordsScreen from "./components/screens/PasswordScreen";
import NotesScreen from "./components/screens/NoteScreen";
import AddressScreen from "./components/screens/AddressScreen";

import AddPasswordModal from "./components/modal/AddPasswordModal";
import AddNoteModal from "./components/modal/AddNoteModal";
import EditPasswordModal from "./components/modal/EditPasswordModal";
import AddAddressModal from "./components/modal/AddAddressModal";

import DeletePasswordModal from "./components/modal/DeletePasswordModal";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ToastContainer className='w-4 h-4' autoClose={3500} />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/dashboard' />
          </Route>
          <Route exact path='/' component={DashboardScreen} />
          <Route exact path='/dashboard' component={DashboardScreen} />
          <Route exact path='/passwords' component={PasswordsScreen} />
          <Route exact path='/passwords/add' component={AddPasswordModal} />
          <Route
            exact
            path='/password/:id/delete'
            component={DeletePasswordModal}
          />
          <Route
            exact
            path='/password/:id/edit'
            component={EditPasswordModal}
          />
          <Route exact path='/add/note' component={AddNoteModal} />
          <Route exact path='/add/address' component={AddAddressModal} />
          <Route exact path='/notes' component={NotesScreen} />
          <Route exact path='/addresses' component={AddressScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;
