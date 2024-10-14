const input = ({label, ...props}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...props}></input>
    </div>
  )
}

export default input
