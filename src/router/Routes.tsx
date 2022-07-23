import { Home, EditContact, NewContact } from "pages";
import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/new" component={NewContact} />
      <Route exact path="/edit/:id" component={EditContact} />
    </Switch>
  );
};

export default Routes;
