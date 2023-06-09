import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

const classNameList = [
  'className1',
  'className2',
  'className3',
  'className4',
  'className5',
]

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordManagerList: [],
    isShow: false,
    searchInput: '',
  }

  addNewPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const initialClassName = classNameList[Math.floor(Math.random() * 5)]

    const newPassword = {
      id: v4(),
      websiteName: website,
      userName: username,
      Password: password,
      isShow: false,
      classColor: initialClassName,
    }
    this.setState(prevState => ({
      passwordManagerList: [...prevState.passwordManagerList, newPassword],
      website: '',
      username: '',
      password: '',
      searchInput: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  FindCheckedOrNot = event => {
    if (event.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  filteredPasswords = id => {
    const {passwordManagerList} = this.state
    const passwords = passwordManagerList.filter(each => each.id !== id)
    this.setState({passwordManagerList: passwords})
  }

  render() {
    const {
      website,
      username,
      password,
      searchInput,
      isShow,
      passwordManagerList,
    } = this.state
    const searchResults = passwordManagerList.filter(each =>
      each.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="password-app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="img"
        />
        <div className="card">
          <form className="password-manager" onSubmit={this.addNewPassword}>
            <h1 className="heading">Add New password</h1>
            <div>
              <button type="button" className="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website"
                />
              </button>
              <input
                type="text"
                onChange={this.onChangeWebsite}
                value={website}
                name="website"
                placeholder="Enter Website"
              />
            </div>
            <div>
              <button type="button" className="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website"
                />
              </button>
              <input
                type="text"
                onChange={this.onChangeUsername}
                value={username}
                name="username"
                placeholder="Enter Username"
              />
            </div>
            <div>
              <button type="button" className="button">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website"
                />
              </button>
              <input
                type="password"
                onChange={this.onChangePassword}
                value={password}
                name="pass"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex">
              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="card2">
          <div className="flex-direction">
            <h1 className="head">Your Passwords</h1>
            <p>{searchResults.length}</p>
            <div className="flex-direction">
              <div className="search-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-img"
                />
              </div>
              <input
                type="search"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearch}
                name="searchvalue"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={this.FindCheckedOrNot}
              id="checkbox"
            />
            <label className="head2" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          <div>
            {searchResults.length === 0 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  className="image"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul>
                {searchResults.map(each => (
                  <PasswordItem
                    passwordDetails={each}
                    key={each.id}
                    isShow={isShow}
                    filteredPasswords={this.filteredPasswords}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
