import React from 'react';

export default class ThemeDetails extends React.Component {
  constructor(props){
    super(props);
  };

  render() {
    console.log(this.props.themeProps);
    return (
      <div className="well">
        <div><span><b>Recommended Theme :</b> </span> {this.props.themeProps.recommendedTheme}</div><br/>
        <div><span><b>Recommended Sub Theme :</b> </span> {this.props.themeProps.recommendedSubTheme}</div><br/>
        <div><span><b>Recommended Cell Type :</b> </span> {this.props.themeProps.themeCell.recommendedCellType}</div><br/>
        <div><span><b>Recommended Cell :</b> </span> {this.props.themeProps.themeCell.recommendedCell}</div><br/>
        <div><span><b>Recommended Role :</b> </span> {this.props.themeProps.themeCell.recommendedRole}</div><br/>
        <div><span><b>Seed Member :</b> </span> {this.props.themeProps.themeCell.seedMember}</div><br/>
      </div>
    )
  }
}
