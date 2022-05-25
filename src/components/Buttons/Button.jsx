function Button({ children, id, className, type, handleClick, isDisabled = false}) {

  const animateRippleEffect = (e) => {
    //get pointer position
    const pointerX = e.clientX;
    const pointerY = e.clientY;

    //get button position
    const buttonX = e.target.offsetLeft;
    const buttonY = e.target.offsetTop;

    //get position within the button
    const xInButton = pointerX - buttonX;
    const yInButton = pointerY - buttonY;

    //create and append span for ripple effect
    const span = document.createElement('span');
    span.classList.add('ripple');

    //set top and left position of the span
    span.style.top = `${yInButton}px`;
    span.style.left = `${xInButton}px`;

    e.target.appendChild(span);

    //remove span after effect
    setTimeout(() => span.remove(), 500);
  }

  const clickHandler = (e) => {
    // animate ripple effect on the button
    animateRippleEffect(e)
    
    
    // call function passed from prop
    handleClick && setTimeout(() => handleClick(e), 500);
  }



  return (
    <button id={id} className={`button ${className}`} type={type} onClick={clickHandler} disabled={isDisabled && 'disabled'}>
    {children}
    </button>
  )
}

export default Button