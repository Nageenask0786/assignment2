import './index.css'

const PasswordItem = props => {
  const {passwordDetails, filteredPasswords} = props
  const {
    id,
    websiteName,
    userName,
    Password,
    isshow,
    classColor,
  } = passwordDetails
  const onClickDelete = () => {
    filteredPasswords(id)
  }
  console.log(isshow)

  const passwordContent = isshow ? (
    Password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  return (
    <li className="password-items">
      <div className={classColor}>{websiteName[0].toUpperCase()}</div>
      <div>
        <h1>{websiteName}</h1>
        <h1>{userName}</h1>
        <h1>{passwordContent}</h1>
      </div>
      <button type="button" className="del-btn" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
