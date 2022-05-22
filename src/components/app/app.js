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

//   onToggleIncrise = (id) => {
    //    this.setState (({data}) => {
    //        const index = data.findIndex(elem => elem.id === id);
    //        const old = data[index];
    //        const newItem = {...old, increase: !old.increase};
    //        const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1) ]

    //        return {
    //            data:newArray
    //        }
    //    })

//     this.setState (({data}) => ({
//         data: data.map(item => {
//             if(item.id === id) {
//                 return {...item, increase: !item.increase}
//             }
//             return item;
//         })        
//     }))
//   };

//   onToggleRise = (id) => {
//     this.setState (({data}) => ({
//         data: data.map(item => {
//             if(item.id === id) {
//                 return {...item, like: !item.like}
//             }
//             return item;
//         })        
//     }))
//   };

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






  render() {
    const employers = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length


    return (
      <div className='app'>
        <AppInfo employers ={employers} increased = {increased}/>

        <div className='serch-panel'>
          <SerchPanel />
          <AppFilter />
        </div>

        <EmployersList
          data={this.state.data}
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
