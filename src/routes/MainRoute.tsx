import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "../Screens/LandingPage";

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};
