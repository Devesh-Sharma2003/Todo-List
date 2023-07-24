import React from 'react'

const Footer = () => 
{
  const mysty = {
    color: "white",
    backgroundColor: "black",
    padding: "5px", 
  };
  return (
    <footer>
      <div style={mysty}>
        <p className='text-center'>
          Copyright &copy; Todos-List.com
        </p>
      </div>
    </footer>
  )
}

export default Footer
