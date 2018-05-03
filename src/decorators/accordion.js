import React from 'react';

export default (OriginalComponent) => class Accordion extends React.Component {
  state = {
    openedItemId: null
  }

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenedItem={this.toggleOpenedItem}/>;
  }

  toggleOpenedItem = id => () => {
    this.setState({
      openedItemId: this.state.openedItemId === id ? null : id
    });
  }
}