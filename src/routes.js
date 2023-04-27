import Home from "./pages/Home";
import Assets from "./pages/Assets";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/" component={Assets}/>
            </Switch>
        </BrowserRouter>
    );
}