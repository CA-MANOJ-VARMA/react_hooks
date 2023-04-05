import IncDecUsage from './components/IncDecUsage'
import FormUsage from './components/FormUsage'
import './App.css';

function App() {
  return (
    <>
    <div className='css-heading-container'>
      <h1>USE STATE HOOK</h1>
      <p>useState is a React Hook that lets you add a state variable to your component.</p>
    </div>
    <IncDecUsage />
    <FormUsage />
    </>
  );
}

export default App;
