import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpensePage from "../components/ExpensePage";
import Header from "../components/Header";
import CreateExpense from "../components/CreateExpense";
import EditExpense from "../components/EditExpense";
import HelpExpense from "../components/HelpExpense";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensePage} exact={true} />
        <Route path="/create" component={CreateExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={HelpExpense} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
