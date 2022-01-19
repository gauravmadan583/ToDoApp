import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<div className='container d-flex flex-column justify-content-center col-12 col-md-6'>
			<GlobalProvider>
			<Header/>
			<AddTask/>
			<TaskList/>
			</GlobalProvider>
		</div>
		
	);
}

export default App;