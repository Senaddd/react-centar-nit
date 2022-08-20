import "./CryptoForm.css";

export default function CryptoForm({ name, value }) {
  return (
    <div classname="Crypto-Form">
      <h1>Crypto Form </h1>
      <ul>
        <li>{name}</li>
        <li> {value}</li>
        <button>ADD</button>
      </ul>

      <h2>CryptoListItem</h2>

      <p>{name}</p>
      <p>{value}</p>
      <button>X</button>
    </div>
  );
}
