export default (props) => {
  const propTypes = {
    onClick: props.onClick,
    disabled: props.disabled,
    type: props.type || 'image',
    name: props.name,
    autoFocus: props.autoFocus,
    src: props.src
  }
  return (
    <div>
      <button {...propTypes}><img {...propTypes} /></button>
      <style jsx>
        {`
          button {
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
            border-radius: 2px;
            padding: 0 12px;
            border: 0;
            cursor: pointer;
            margin-right: 5px;
          }
          button:focus {
            outline:0;
          }
          button:active {
            outline: 0;
            background: #f2f2f2;
          }
        `}
      </style>
    </div>
  )
}
