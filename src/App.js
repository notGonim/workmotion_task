import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import * as ROUTES from './constants/routes'
import Spinner from "./components/spinner/spinner.component";
import { useDarkMode } from "./services/useDarkMode.service";

const HomePage = lazy(() => import('./pages/home.page'))
const AddPage = lazy(() => import('./pages/add.page'))



function App() {

  useDarkMode()


  return (
    <Router>
      <Suspense fallback={<Spinner />}>
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
