
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Editor from './Editor'

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  );
}

export default App;

// > react-scripts start

// nvm install-latest-npm(node:16658) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] 
// DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// (node:16658) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] 
// DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
