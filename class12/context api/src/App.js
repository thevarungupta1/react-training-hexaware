import ComponentC from "./components/ComponentC";
import { UserProvider } from  './components/userContext';


function App() {
  return (
    <div className="container">
      
      <UserProvider value="Mark Smith" >
      <ComponentC />
      </UserProvider>
      
    </div>
  );
}

export default App;
