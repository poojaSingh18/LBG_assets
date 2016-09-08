import React from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {teal800, orange700} from 'material-ui/styles/colors';
import AssetTable from './assetTable.jsx';
import $ from 'jquery';
import Dialog from 'material-ui/Dialog';
import {orange800} from 'material-ui/styles/colors';
import AssetInfoDialog from './assetInfo.jsx';


const customContentStyle = {
  width: '100%',
  maxWidth: 650,
};

export default class Content extends React.Component {

  constructor(props){
  super(props);
  this.state = {
    assetList: [],
    assetObject:{},
    open:false
  },
    this.handleTabClick = this.handleTabClick.bind(this);
    this.getAssetDetails = this.getAssetDetails.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
  };

  componentDidMount() {
    console.log("componentWillUpdate");
    $.get('/lbgRoute/getEmployees/ADM', function (result) {
    this.setState({
      assetList: result
    })
    }.bind(this));
  };

  handleTabClick(label){
    var towerType = label;
    $.get('/lbgRoute/getEmployees/'+towerType, function(result){
      this.setState({
        assetList: result
      })
    }.bind(this));
  };

  getAssetDetails(asset){
  console.log(asset);
    this.setState({
      assetObject: asset,
      open: true
    })

  };



//Dialog Method

handleClose() {
  this.setState({open: false});
};

handleOnRequestClose() {
  this.setState({open: false});
};




  render() {
    console.log("type of"+ this.state.assetObject.empNo);
    const styles={
        flatButtonStyle:{
                         fontWeight: 550, fontSize: 18, color: '#b31144'
                        },
        toolbarSeparatorStyle:
                        {   marginLeft: 0,
                            backgroundColor:teal800
                        }
    }

    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <FlatButton label="ADM" labelStyle={styles.flatButtonStyle} onClick={this.handleTabClick.bind(this, 'ADM')} />
            <ToolbarSeparator style={styles.toolbarSeparatorStyle} />
            <FlatButton label="ASM" labelStyle={styles.flatButtonStyle} onClick={this.handleTabClick.bind(this, 'ASM')} />
            <ToolbarSeparator style={styles.toolbarSeparatorStyle}  />
            <FlatButton label="QA" labelStyle={styles.flatButtonStyle} onClick={this.handleTabClick.bind(this, 'QA')} />
          </ToolbarGroup>
        </Toolbar>

        <Paper zDepth={2}>
          <AssetTable assetlistArray={this.state.assetList} chosenAssetView={this.getAssetDetails} />
           <Dialog
           title="Asset Details"
           contentStyle={customContentStyle}
           titleStyle={{backgroundColor:orange800}}
           modal={true}
           open={this.state.open}
           autoScrollBodyContent={true}
           onRequestClose={this.handleOnRequestClose}
           >
          <AssetInfoDialog assetInfo={this.state.assetObject} />

          </Dialog>
        </Paper>
      </div>
    );
  }
}
