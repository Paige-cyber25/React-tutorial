import './App.css';
import Aspiration from './FirstAssignment/Aspiration';
import Bio from './FirstAssignment/Bio';
import Complexion from './FirstAssignment/Complexion';
import FullNamesInitials from './FirstAssignment/FullNamesInitials';
import GetRandomNumbers from './FirstAssignment/GetRandomNumbers';
import Hobbies from './FirstAssignment/Hobbies';
import Name from './FirstAssignment/Name';
import Picture from './FirstAssignment/Picture';
import Hello from './Hello';


function App() {
  return (
    <div >
      <h1 className="red">Hello World</h1>
      <Hello />
      <Name />
      <Complexion />
      <Picture />
      <Hobbies />
      <Aspiration />
      <Bio />
      <FullNamesInitials />
      <GetRandomNumbers />
    </div>
  );
}

export default App;
