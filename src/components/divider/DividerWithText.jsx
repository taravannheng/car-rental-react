function DividerWithText({ text }) {
  return (
    <div className="divider divider__with-text">
      <hr />
      <p>{text}</p>
    </div>
  )
}

export default DividerWithText