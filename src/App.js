import './App.css';
import ContainerHeader from './Components/Header/ContainerHeader'
import Nav from './Components/NavBar/Nav';
import ContainerWithRouter from './Components/Profile/ContainerProfile'
import ContainerDialogs from './Components/ContainerDialogs/ContainerDialogs.jsx';
import ContainerFriends from './Components/ContainerFriends/ContainerFriends';
import { BrowserRouter, Route } from "react-router-dom";
import ContainerLoginPage from './Components/Login/ContainerLogin'
import { compose } from 'redux';
import { connect } from "react-redux";
import React from 'react';
import {InizializationUserAPP} from './Redux/Redusers/Redicer_Inizialization';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Preloader from './Components/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.InizializationUserAPP();
  }

  render() {
    return (
      <>
        {(!this.props.Inizialization) ? <Preloader /> :
        <BrowserRouter>
          <div className="App-wrapper">
            <ContainerHeader />
            <div className='main'>
              <Nav />
              <Route path='/Profile/:userID?' render={() => <ContainerWithRouter />} />
              <Route path='/Dialogs' render={() => <ContainerDialogs />} />
              <Route path='/Friends' render={() => <ContainerFriends />} />
              <Route path='/login' render={() => <ContainerLoginPage />} />
              <Route render={() => { <p>Ошибка</p> }} />
            </div>
          </div>
        </BrowserRouter>}
      </>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    Inizialization: state.InizializationApp.Inizialization,
    isAuth: state.Authentification.isAuth,
  }
}
export default compose(
  connect( mapStateToProps, {
    InizializationUserAPP
  }))(App);

