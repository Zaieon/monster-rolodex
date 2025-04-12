import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { getValue } from '@testing-library/user-event/dist/utils';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json() )
    .then(users=>this.setState({monsters:users}))
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className="App">
        <SearchBox 
        handleChange = {e =>this.setState({searchField: e.target.value})} placeHolder='search monsters' />
        
        <CardList monsters={filteredMonsters} searchField = {searchField} />
       
    </div>
    )
  }
}


export default App;

