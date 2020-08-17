import Logo from '@App/components/Logo';
import Title from '@App/components/Title';
import { RecipientDatesState, RecipientEventsState, RecipientsState, RootState } from '@App/store/reducers';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { getRecipientDates, getRecipientEvents, getRecipients } from '../../store/actions';
const LogoUrl = require('../../assets/images/logo-birdie.svg');

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
  }
  .row{
    display: inline-flex
    width: 100%
  }
  .col-38{
    width: 38%
  }
  .col-62{
    width: 62%
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Ul = styled.ul`
display: table-row
`;
const Li = styled.li`
display: table-cell;
height: 100px;
list-style-type: none;
margin: 10px;
vertical-align: middle;
padding: 0px 5px;
`;

const RecipientSelect: React.FC = () => {
  const state = useSelector<RootState, RecipientsState>(s => s.recipients);
  const dispatch = useDispatch();
  const items = state.data.map(x => <Li key={x}><Link to={`/events/${x}`} ><p>{x}</p></Link></Li>)

  React.useEffect(() => {
    dispatch(getRecipients())
  },              [])

  if (state.isFetching) { return <p>Loading ...</p> }
  if (state.error) { return <p>Error Fetching Data</p> }
  return (
    <Ul>
      {items}
    </Ul>
  )
}
const RecipientEvents: React.FC = () => {
  const { params } = useRouteMatch<{ id: string }>()
  const state = useSelector<RootState, RecipientEventsState>(s => s.events)
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getRecipientEvents(params.id))
  },              [params.id])

  const items = state.data.map(x => (
    <tr>
      <td>{x.id}</td>
      <td>{x.event_type}</td>
      <td>{new Date(Date.parse(x.timestamp)).toISOString()}</td>
    </tr>
  ))

  if (state.isFetching) { return <p>Loading ...</p> }
  if (state.error) { return <p>Error fetching data</p> }
  return (
    <>
      <label>List events</label>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Event Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    </>
  )
}
const RecipientDates: React.FC = () => {
  const { path, params } = useRouteMatch<{ id: string, date: string }>()
  const state = useSelector<RootState, RecipientDatesState>(s => s.dates)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRecipientDates(params.id))
  },              [params.id])
  if (state.isFetching) { return <p>Loading ...</p> }
  if (state.error) { return <p>Error fetching data</p> }
  return (
    <>
      <div className="row">
        <nav>
          <ul>
            <li>hi</li>
          </ul>
        </nav>
      </div>
      <div className="row">*
    <Switch>
          <Route exact={true} path={path}  >
            dates
          </Route>
          <Route exact={true} path={`${path}/:date`}  >
            <p>{params.date}</p>
            <p>{params.id}</p>
          </Route>
        </Switch>
      </div>

    </>
  )
}
const RecipientOverviewPage: React.FC = () => {
  const { path, params } = useRouteMatch<{ id: string }>();
  return (
    <div className="row">
      <div className="col-38">
        <nav>
          <ul>
            <li><Link to={`/events/${params.id}`} ><p>Events</p></Link></li>
            <li><Link to={`/events/${params.id}/date`} ><p>Dates</p></Link></li>
            <li><Link to={`/events/${params.id}/type`} ><p>Types</p></Link></li>
          </ul>
        </nav>
      </div>
      <div className="col-62">
        <Switch>
          <Route exact={true} path={path}  >
            <RecipientEvents />
          </Route>
          <Route exact={true} path={`${path}/date`}  >
            <RecipientDates />
          </Route>

          <Route exact={true} path={`${path}/type`}  >
            <p>graph</p>
          </Route>
        </Switch>
      </div>

    </div>
  )
}
const LandingPage: React.FC = () => {
  return <p>Please select a recipient id</p>
}

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <RecipientSelect />
        </nav>
        <section>
          <Route path="/" exact={true}  >
            <LandingPage />
          </Route>
          <Route path="/events/:id"  >
            <RecipientOverviewPage />
          </Route>
        </section>
      </div>
    </Router>
  );
}
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Logo src={LogoUrl} />
        <Title>Welcome to the birdie care recipient overview</Title>
        <AppRouter />
      </AppContainer>
    </>
  )
}
export default App