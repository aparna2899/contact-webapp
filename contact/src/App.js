import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ContactDetails from './pages/ContactDetail';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={ContactDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
