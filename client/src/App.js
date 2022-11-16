// import logo from './logo.svg';
import './App.css';
//componets
import InputTodo from './componets/InputTodo';
import ListTodo from './componets/ListTodo';

function App() {
  return (
   <>
   <div className='container'>
   <InputTodo/>
   <ListTodo/>
   </div>
   </>
  );
}

export default App;
