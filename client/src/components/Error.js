import { styled } from "styled-components";

const Error = ({ error }) => {
  return (
    <Wrapper>
      <p>There was an error... </p>
      <p>{error}</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 5rem;
  text-align: center;
  font-size: 1.5rem;
  color: var(--red);
`;
export default Error;
