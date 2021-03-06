export default (props) => {
  const propTypes = {
    onClick: props.onClick,
    disabled: props.disabled,
    value: props.value,
    type: props.type || 'button',
    name: props.name,
    autoFocus: props.autoFocus,
    src: props.src
  }
  return (
    <div>
      <input {...propTypes} />
      <style jsx>
        {`
          input {
            background: #6ac4ae;
            color: white;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
            border-radius: 2px;
            min-width: 90px;
            padding: 0 12px;
            font-size: 14px;
            font-weight: 500;
            border: 0;
            cursor: pointer;
            height: 36px;
            margin-right: 5px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
          input:disabled {
            background: #eaeaea;
            color: #cccccc;
            border-color: white;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
        `}
      </style>
    </div>
  )
}
