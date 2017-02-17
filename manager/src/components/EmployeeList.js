import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    //nextProps: next set of props that this component will be rendered with
    //this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }
  render() {
   return(
     <View>
       <Text>EmployeeList</Text>
       <Text>EmployeeList</Text>
       <Text>EmployeeList</Text>
       <Text>EmployeeList</Text>
       <Text>EmployeeList</Text>
     </View>
   ); 
  }
} 

export default connect(null, { employeesFetch })(EmployeeList);
