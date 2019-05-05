import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
class List extends Component {
  state = {
    data: []
  };

  async componentWillMount() {
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
                        <Link to={'/show/' + item.id} className = {'title'}>
                            {item.title}
                        </Link>
                        <div className = {'body'}>{item.body}</div>
                    </div>
                ))
            }
        </div>
    </div>);
  }
}

export default List;
