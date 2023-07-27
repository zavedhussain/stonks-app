import { useState } from "react";
import { styled } from "styled-components";

const Search = ({ handleStock, isLoading }) => {
  //state to control input elements
  const [values, setValues] = useState({});
  const handleChange = (e) => {
    let { id, value } = e.target;
    if (id === "symbol") {
      value = value.toUpperCase();
    }
    setValues({ ...values, [id]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleStock(values);
  };

  return (
    <Wrapper>
      <div className="header">
        <p>📈</p>
        <h1>STONKS</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="title">
          <h5>Search Trade Statistics:</h5>
        </div>
        <div className="form-row">
          <label htmlFor="symbol">Stock</label>
          <input
            type="text"
            name="symbol"
            id="symbol"
            value={values.symbol ?? ""}
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="form-row">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={values.date ?? ""}
            onChange={handleChange}
            required={true}
          />
        </div>
        <button type="submit" className="btn" disabled={isLoading}>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    display: flex;
    align-items: center;
    font-size: clamp(2rem, 5vw, 5rem);
    color: var(--primary);
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: -2rem;
    gap: 1rem;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
    background-color: var(--white);

    .title h5 {
      font-size: 1.3rem;
      margin: 0;
      font-family: Roboto;
    }

    .form-row {
      display: flex;
      flex-direction: column;
    }
    label {
      display: block;
      line-height: 1.5;
      margin-bottom: 0.75rem;
    }

    input {
      height: 25px;
      padding: 0.375rem 0.75rem;
      border-radius: 0.25rem;
      background-color: var(--backgroundColor);
      border: 1px solid var(--grey);
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      background: var(--primary);
      border: 1px solid var(--grey);
      color: var(--white);
      font-size: 1.1rem;
      cursor: pointer;
    }
  }
`;

export default Search;
