

const Header = ({title}) => {
  return ( 
    <>
      <h1 
        className='text-center m-0 p-4 bg-success color-white'>
          <span>
            <i 
              className="fas fa-cloud-sun mr-4"
            >
            </i>
          </span>
        {title}
          <span>
            <i 
              className="fas fa-cloud-rain ml-4">
            </i>
          </span>
      </h1>
    </>
   );
}
 
export default Header;