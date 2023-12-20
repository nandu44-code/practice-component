import './App.css';
import Practice from './components/Practice';

const userdetails=[
  {name:'Nandu g nair', emailID:'nanduganeshnair@gmail.com'},
  {name:'Erwin Powell',emailID:'Erwinpowell@gmail.com'}
]


function App() {
  return (
    <div className="App">  
      {

      userdetails.map((user)=> (<Practice name={user.name} email={user.emailID} />))

      }
   
    </div>
  );
}

export default App;
