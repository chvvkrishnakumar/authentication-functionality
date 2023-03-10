import {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    )
  }
}
