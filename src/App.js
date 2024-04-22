import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import {Route} from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js"; 
import SelectedCharacterCard from "./components/SelectedCharacterCard.js";


export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/SelectedCharacterCard/:id" component={SelectedCharacterCard} />
    </main>
  );
}
