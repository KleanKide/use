import "./App.css";
import { Suspense} from "react";
import Comments from "./components/Comments";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading...</p>}>
        <Comments />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
