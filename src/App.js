import './App.css';
import Form from './components/Form/Form.js';

function App() {
  function handleAddActivity(){
    
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
