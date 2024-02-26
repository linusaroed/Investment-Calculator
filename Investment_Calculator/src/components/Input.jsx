export default function Input({label, handleChange}){
    return (
        <p>
          <label>{label}</label>
          <input type="number" onChange={handleChange} required/>
        </p>
    );
}