import React, {Component} from 'react';

class Header extends Component {
  state = {
    search: 'hello',
    data: []
  };

  render() {
    return (<div>Search: <input type="text"
        value={this.state.data}
        onChange = {(e) => this.setState({search: e.target.value}) } />
            <span>{this.state.search}</span>
        </div>);
  }
}

export default Header;
