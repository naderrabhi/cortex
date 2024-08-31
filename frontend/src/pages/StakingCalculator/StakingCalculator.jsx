import React, { useState } from 'react'
import { ButtonArea, Calculator, CalculatorCard, CalculatorForm, CalculatorInput, FormGroup } from './stakingCalculator.styles';
import { calculateButtonData } from '../../constants/data';
import { Button, ParagraphTitle, Title } from '../../styles/style';

export default function StakingCalculator() {
    // eslint-disable-next-line no-unused-vars
    const [wallet, setWallet] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      // TODO
      setLoading(false);
    };
  
    return (
      <Calculator>
        <CalculatorCard>
            <Title><strong>TAO Staking Calculator</strong></Title>
            <ParagraphTitle><strong>Enter the TAO amount to calculate your potential TAO staking rewards.</strong></ParagraphTitle>
  
          <CalculatorForm onSubmit={handleSubmit}>
            <FormGroup>
              <CalculatorInput
                type="number"
                id="tao-amount"
                name="tao-amount"
                required
                placeholder="TAO Amount"
                step="0.01"
                min="0"
              />
            </FormGroup>
            <FormGroup>
              <CalculatorInput
                type="number"
                id="ft-neurons-owned"
                name="ft-neurons-owned"
                required
                placeholder="FT Neurons Owned"
                step="0.01"
                min="0"
              />
            </FormGroup>
            <ButtonArea>
              {calculateButtonData.map((button) => (
                <Button background={button.id === 2 && button.background} color={button.id === 2 && button.color} key={button.text} onClick={button.function}>
                  {button.text}
                </Button>
              ))}
            </ButtonArea>
          </CalculatorForm>
        </CalculatorCard>
      </Calculator>
    );
  }
