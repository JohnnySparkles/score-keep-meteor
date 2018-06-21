import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubTitle() {
    if (this.props.subTitle != 0) {
      return (<h2>{this.props.subTitle}</h2>)
    }
    else {
      return null;
    }
  }

  render() {

    return (
        <div>
          <h1>{this.props.title}</h1>
          {this.renderSubTitle()}
        </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

TitleBar.defaultProps = {
  title: 'Default Title',
};