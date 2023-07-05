import React, { useState } from "react";
import CardList from "./components/card-list/card-list.component";
import FindPhotos from "./components/FindPhotos/FindPhotos";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchField(searchTerm);
  };

  return (
    <div className="App">
      <h1 className="app-title">Random Pictures</h1>
      <h2 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">In the search bar, type a category like 'space', 'woods', or anything you like!</h2>
      <FindPhotos onSearch={handleSearch} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CardList searchField={searchField} />
      <Footer />
      </div>
    </div>
  );
};

export default App;
