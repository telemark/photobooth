export default (props) => {
  const propTypes = {
    onClick: props.onClick,
    disabled: props.disabled,
    value: props.value,
    type: props.type || 'button',
    name: props.name,
    autoFocus: props.autoFocus
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
            align-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border: 0;
            cursor: pointer;
            display: inline-block;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            height: 36px;
            -webkit-box-pack: center;
            margin-right: 5px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
          }
          input:disabled {
            background: #eaeaea;
            color: #cccccc;
            border-color: white;
          }
        `}
      </style>
    </div>
  )
}
