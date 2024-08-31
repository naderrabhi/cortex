import styled from 'styled-components';

export const Rewards = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
`;

export const RewardsCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  word-wrap: break-word;
  background-color: #292929;
  border: 1px solid #222;
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
  background-clip: padding-box;
  box-shadow: 0 2px 6px 0 rgb(188 210 233 / 12%);
`;

export const RewardsInput = styled.input`
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

export const RewardsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StylishButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: black;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;

  .button-text {
    margin-right: 8px;
  }

  .icon-button {
    margin-left: 8px;
  }
`;