import React, {Component} from 'react';
import './index.css';
class List extends Component {
  state = {
    data: []
  };

  async componentWillMount() {
    console.log('mounted');
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    this.setState({data: json});
    console.log(this.state.data);
  }
//
//  componentDidUpdate() {
//    console.log('updated');
//  }

  render() {
    return (<div>
        <div className = {'wrapper'}>
            {
                this.state.data.map((item) => (
                    <div className = {'list-item'}>
                        <div className = {'title'}>{item.title}</div>
                        <div className = {'body'}>{item.body}</div>
                    </div>
                ))
            }
        </div>
    </div>);
  }
}

export default List;
