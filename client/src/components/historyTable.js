import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import TableRow from './tableRow';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Table, ButtonToolbar, Button, Navbar, CollapsibleNav, NavItem, NavDropdown, Nav, MenuItem, Grid, Col, Row} from 'react-bootstrap';
import {closeModal, dashboardToSession, populateUserSessions, populateUserProfileData} from '../actions';

class HistoryTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table responsive bordered condensed hover striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Partner</th>
            <th>Toy Problem</th>
            <th>Time</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {this.props.sessionData.sessionArray ? this.props.sessionData.sessionArray.map((row, index) =>
            <TableRow
              key={index}
              id={index+1}
              partner={row[0]}
              name={row[1]}
              time={row[2]}
              category={row[3]}
            />) : ''}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    sessionData: state.sessionData,
    userProfileData:  state.userProfileData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTable);




