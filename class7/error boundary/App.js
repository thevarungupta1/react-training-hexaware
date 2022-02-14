import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./components/Home";


function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
