import { styled } from "styled-components";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Stock = ({ stock }) => {
  const { symbol, high, low, open, close, volume } = stock;

  //calculate if stock went down or up
  const diff = Math.abs(close - open);
  const stonks = close - open > 0;
  return (
    <Wrapper>
      <div className="header">
        <div className="logo">
          <div className="icon">{symbol[0]}</div>
          <h5>{symbol}</h5>
        </div>
        <div className="close">
          <h5>${close}</h5>
          <p className={stonks ? "success" : "danger"}>
            ( {stonks ? "+" : "-"}
            {diff.toFixed(2)}
            {stonks ? <FaArrowUp /> : <FaArrowDown />} )
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-column">
          <p>Open</p>
          <h5>{open}</h5>
        </div>
        <div className="footer-column">
          <p>High</p>
          <h5>{high}</h5>
        </div>
        <div className="footer-column">
          <p>Low</p>
          <h5>{low}</h5>
        </div>
        <div className="footer-column">
          <p>Close</p>
          <h5>{close}</h5>
        </div>
        <div className="footer-column">
          <p>Volume</p>
          <h5>{volume}</h5>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  max-width: 400px;
  margin: 5rem auto 0;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  font-family: Roboto;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);

    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.4rem;

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        background-color: var(--primary);
        font-size: 1.6rem;
        font-weight: 700;
        border-radius: 10px;
        color: var(--white);
      }
    }
    .close {
      display: flex;
      flex-direction: column;
      align-items: center;

      h5 {
        margin: 0;
        font-size: 1.2rem;
      }
      .success {
        color: var(--green);
      }
      .danger {
        color: var(--red);
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-around;

    .footer-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h5 {
      margin: 0;
      font-size: 1.1rem;
    }
  }
`;

export default Stock;
