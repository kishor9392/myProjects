import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onTap = () => {
    updateActiveTabId(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onTap}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
