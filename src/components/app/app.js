import AppInfo from '../app-info/app-info';
import SerchPanel from '../serch-panel/serch-panel';
import AppFilter from '../app-fillter/app-fillter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';


import './app.css';

function App () {
    
    const data = [
        {name: 'Jon', salary: 5000, increase: false, id: 1},
        {name: 'Smit', salary: 1000, increase: true, id: 2},
        {name: 'Den', salary: 500, increase: false, id: 3},    
    ]

    return (
        <div className="app">
            <AppInfo />
           
            <div className="serch-panel">
              <SerchPanel />
              <AppFilter />   
                
            </div>

            <EmployersList data  = {data}/>
            <EmployeesAddForm />

        </div>
    )
}

export default App