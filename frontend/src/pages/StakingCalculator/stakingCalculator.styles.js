import styled from "styled-components";

export const Calculator = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
`;

export const CalculatorCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  word-wrap: break-word;
  background-color: #292929;
  border: 1px solid #222;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-clip: padding-box;
  box-shadow: 0 2px 6px 0 rgb(188 210 233 / 12%);
`;

export const CalculatorTitle = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (max-width: 750px) {
    h2 {
      font-size: 1.2rem;
    }
    h5 {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export const CalculatorForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CalculatorInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const ButtonArea = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`;