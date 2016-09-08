import React from 'react';

export default class Content extends React.Component {

  constructor(props){
  super(props);
  console.log("assetInfo"+this.props.assetInfo);
  };

render(){
  console.log(this.props.assetInfo);
return(
<div>
<h1>{this.props.assetInfo.empNo}</h1>
<h1>{this.props.assetInfo.empName}</h1>
</div>
)
}

  }
