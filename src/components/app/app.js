import AppInfo from '../app-info/app-info';
import SerchPanel from '../serch-panel/serch-panel';
import AppFilter from '../app-fillter/app-fillter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';


import './app.css';

function App () {
    return (
        <div className="app">
            <AppInfo />
           
            <div className="serch-panel">
              <SerchPanel />
              <AppFilter />        
                
            </div>

            <EmployersList />
            <EmployeesAddForm />

        </div>
    )
}

export default App