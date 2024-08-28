import underConstructionLogo from '../../assets/under_construction.svg'

function UnderConstruction() {

    return (
      <>
        <div>
          <img src={underConstructionLogo}  style={{width: '250px', height: 'auto'}}  alt="React logo" />
        </div>
        <h1 style={{ fontSize: 30, marginTop: '30px' }}> Página en construcción... </h1>
      </>
    )
  }
  
export default UnderConstruction;