/** @format */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardScreen from "./components/screens/DashboardScreen";
import PasswordsScreen from "./components/screens/PasswordScreen";
import NotesScreen from "./components/screens/NoteScreen";
import AddressScreen from "./components/screens/AddressScreen";

import AddPasswordModal from "./components/modal/AddPasswordModal";
import EditPasswordModal from "./components/modal/EditPasswordModal";
// import AddAddressModal from "./components/modal/AddAddressModal";
import DeletePasswordModal from "./components/modal/DeletePasswordModal";

import AddNoteModal from "./components/modal/AddNoteModal";
import DeleteNoteModal from "./components/modal/DeleteNoteModal";
import EditNoteModal from "./components/modal/EditNoteModal";

import SearchScreen from "./components/screens/SearchScreen";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <ToastContainer className='' autoClose={3500} />
        <Routes>
          <Route path='/' element={<DashboardScreen />} />
          <Route path='/dashboard' element={<DashboardScreen />} />
          <Route path='/search' element={<SearchScreen />} />
          <Route path='/passwords' element={<PasswordsScreen />} />
          <Route path='/passwords/add' element={<AddPasswordModal />} />
          <Route
            path='/password/:id/delete'
            element={<DeletePasswordModal />}
          />
          <Route path='/password/:id/edit' element={<EditPasswordModal />} />
          <Route path='/add/note' element={<AddNoteModal />} />
          {/* <Route path='/add/address' element={<AddAddressModal />} /> */}
          <Route path='/notes' element={<NotesScreen />} />
          <Route path='/note/:id/delete' element={<DeleteNoteModal />} />
          <Route path='/note/:id/edit' element={<EditNoteModal />} />
          <Route path='/addresses' element={<AddressScreen />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
