import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Table";

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
        </Switch>
    </Router>
)

export default Routes;
