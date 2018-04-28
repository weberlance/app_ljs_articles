import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const {article} = this.props;
    const body = this.state.isOpen ? article.text : null;
    return (
      <div>
        <div>
          <h1>{article.title}</h1>
          <button onClick={() => this.toggleOpen()}>
            {this.state.isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        <div>
          {body}
        </div>
      </div>
    );
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default Article;