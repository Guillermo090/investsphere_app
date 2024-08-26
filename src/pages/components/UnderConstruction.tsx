import underConstructionLogo from '../../assets/under_construction.svg'

function UnderConstruction() {

    return (
      <>
        <div>
          <img src={underConstructionLogo}  style={{width: '300px', height: 'auto'}}  alt="React logo" />
        </div>
        <h1> Página en construcción... </h1>
      </>
    )
  }
  
export default UnderConstruction;