const Button = ({type = 'button', lable,  className, onClick, props}) => {
  return (
    <button onClick={onClick} className={`${className} rounded-[4px] p-[10px]  text-[14px] leading-[21px] font-[600] hover:text-white  bg-primary-color hover:bg-[#f98da1] transition-all ease-in-out duration-300 `} type={type} {...props}>
            {lable}
    </button>
  )
}

export default Button