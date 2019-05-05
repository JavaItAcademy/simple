import React, {Component} from 'react';
import './index.css';
class Overview extends Component {
  state = {
    data: []
  };

  async componentWillMount() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id);
    let json = await response.json();
    this.setState({data: json});
    console.log(this.state.data);
  }
  render() {

    let {title, body} = this.state.data;
    return (<div>
        <div className = {'wrapper'}>
            <div className = {'list-item'}>
                <div className = {'title'}>{title}</div>
                <div className = {'body'}>{body}</div>
            </div>
        </div>
    </div>);
  }
}

export default Overview;
