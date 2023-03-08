import './App.css';
import SearchForm from './SearchForm';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };


  render() {
    return (
    <>
      {/* <Header/>
      <SelectedForm/>
      <Main/>
      <Footer/> */}
      <SearchForm />
    </>
    )
  }

};
export default App;
