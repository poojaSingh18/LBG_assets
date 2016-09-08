import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

export default class AssetTable extends React.Component {

constructor(props){
  super(props);
  this.state = {
  headerrowArray:['Emp Name','emp_Band','location','Mentor','BGV Status','Visa Status'],
  rowArray:['empName','empBand','location','mentor','bgvStatus','visaStatus']
  },
    this.handleIdClick = this.handleIdClick.bind(this);
};

handleIdClick(rowIndex) {
console.log("handleIdClick" + this.props.assetlistArray[rowIndex]);
  return this.props.chosenAssetView(this.props.assetlistArray[rowIndex]);



  };
  render () {

  var rows=[];
  var headerrow=[];

  this.state.headerrowArray.forEach(function(colname){
   headerrow.push(
      <TableHeaderColumn style={{whiteSpace: 'inline', fontSize:15}} >{colname}</TableHeaderColumn>
   )
  }.bind(this));

    this.props.assetlistArray.forEach(function (record, i) {
      if(Object.keys(record).length === 0){
        rows.push(
          <TableRow key={i}>
            <h1 style={{textAlign: 'center', color: 'firebrick'}}><i style={{color: yellow600, fontSize: '40px'}} className="material-icons">error</i> No Data Found..!!</h1>
          </TableRow>
        );
      }
      else{
      var rowcol=[];
      this.state.rowArray.forEach(function(colname){
     rowcol.push(<TableRowColumn style={{whiteSpace: 'inline'}} >{record[colname]}</TableRowColumn>);
     }.bind(this));
      console.log(record['empNo']);
        rows.push(
          <TableRow key={i} value={record['empNo']}>
            <TableRowColumn style={{whiteSpace: 'inline'}}><button className="btn btn-primary" onClick={this.handleIdClick.bind(this, i)}>{record['empNo']}</button></TableRowColumn>
          {rowcol}
          </TableRow>
        );
      }
    }.bind(this));

    return(

    <Table>
           <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
             <TableRow>
               <TableHeaderColumn style={{whiteSpace: 'inline', fontSize:15}} >Emp No</TableHeaderColumn>
               {headerrow}
             </TableRow>
           </TableHeader>

           <TableBody displayRowCheckbox={false} >
               {rows}
           </TableBody>
         </Table>

    )
  }
};
