import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SerchPanel from '../serch-panel/serch-panel';
import AppFilter from '../app-fillter/app-fillter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css';
//import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Jon', salary: 5000, increase: false, like: true, id: 1 },
        { name: 'Smit', salary: 1000, increase: true, like: false, id: 2 },
        { name: 'Den', salary: 500, increase: false, like: false, id: 3 },
      ],
      term: '',
      filter: 'all',

    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArray = [...data, newItem];

      return {
        data: newArray,
      };
    });
  };

    onToggleProp = (id, prop) => {
        this.setState (({data}) => ({
                    data: data.map(item => {
                        if(item.id === id) {
                            return {...item, [prop]: !item[prop]}
                        }
                        return item;
                    })        
                }))
    }

    searchEmp = (items, term) => {
      if (term.length === 0) {
        return items
      }

      return items.filter(item => {
        return item.name.indexOf(term) > -1
      })

    }

    onUpdateSearch = (term) =>{
      this.setState({term: term});
    }

    filterPost =(items, filter) => {
      switch(filter) {
        case 'like' : 
          return items.filter(item => item.like);
        case 'salary':
          return items.filter(item => item.salary > 1000); 
            
        default: return items
      }
    }

    onFilterSelect = (filter) => {
      this.setState({filter})
    }


  render() {
    const {data, term, filter} = this.state;
    const employers = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)

    return (
      <div className='app'>
        <AppInfo employers ={employers} increased = {increased}/>

        <div className='serch-panel'>
          <SerchPanel onUpdateSearch = {this.onUpdateSearch}/>
          <AppFilter filter = {filter}
                     onFilterSelect = {this.onFilterSelect}
          />
        </div>

        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        //   onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
