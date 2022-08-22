import "./CryptoForm.css";
import CryptoCard from "./TrecaKomp";




const CryptoList = ({ name, value, deleteCrypto }) => {

 3

  
  return (
    <div className="crypto-list">
      <p>{name}</p>
      <p>${value}</p>


      <button>
        Show more 
      </button>



      <button className="btn2" onClick={deleteCrypto}>
        X
      </button>
    </div>
  );
};

export default CryptoList;