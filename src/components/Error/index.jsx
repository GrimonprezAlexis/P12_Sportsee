import styled from 'styled-components';

const StyledErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 5rem 10rem;
    font-size: 4rem;
    text-align: center;
    flex-wrap: wrap;
`;

const Error = () => {
  return (
    <StyledErrorContainer>
      <h1>Oups 🙈 Cette page n'existe pas</h1>
    </StyledErrorContainer>
  );
};
export default Error;