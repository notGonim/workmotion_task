import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from './constants/routes'

const HomePage = lazy(() => import('./pages/home.page'))
const AddPage = lazy(() => import('./pages/add.page'))



function App() {
  return (
    <Router>
      <Suspense fallback={'Loading...'}>
        <Switch>
          <Route path={ROUTES.HOME} exact >
            <HomePage />
          </Route>
          <Route path={ROUTES.ADD} exact >
            <AddPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
