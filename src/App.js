import './App.css'
import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { NavBar } from './shared/NavBar'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { HomeComponent } from './Pages/Home/Home';
import { ListComponent } from './Pages/Pokemon/List';

function App() {
    return ( 
      <Container >
        <Row>
          <Col xs={12} lg={12}> 
            <NavBar />
          </Col> 
          <Col xs={12} lg={12} className="my-5">
            <Router>
              <Switch>
                  <Route path='/' component={HomeComponent} exact></Route>
                  <Route path='/list' component={ListComponent} exact></Route>
              </Switch>
            </Router>
          </Col>

        </Row> 
      </Container>
    );
}

export default App;