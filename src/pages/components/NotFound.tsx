import notFoundLogo from '../assets/404.svg'

function NotFound() {

    return (
      <>
        <div>
          <img src={notFoundLogo}  style={{width: '300px', height: 'auto'}}  alt="React logo" />
        </div>
        <h1> Página no encontrada... </h1>
      </>
    )
  }
  
export default NotFound;