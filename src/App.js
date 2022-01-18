import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<div className='container'>
			<GlobalProvider>
			<Header/>
			<AddTask/>
			<TaskList/>
			</GlobalProvider>
		</div>
		
	);
}

export default App;