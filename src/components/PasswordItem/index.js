import './index.css'

const PasswordItem = props => {
  const {passwordDetails, filteredPasswords, isShow} = props
  const {id, websiteName, userName, Password, classColor} = passwordDetails
  const onClickDelete = () => {
    filteredPasswords(id)
  }
  console.log(isShow)
  return (
    <li className="password-items">
      <div className={classColor}>{websiteName[0].toUpperCase()}</div>
      <div>
        <p>{websiteName}</p>
        <p>{userName}</p>
        <div>
          {!isShow && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
          {isShow && <p>{Password}</p>}
        </div>
      </div>
      <button
        type="button"
        className="del-btn"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
