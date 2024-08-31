import React, { useState } from 'react'
import { Rewards, RewardsCard, RewardsForm, RewardsInput } from './checkRewards.styles';
import { Button, ParagraphTitle, Title } from '../../styles/style';

export default function CheckRewards() {
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
      <Rewards>
        <RewardsCard>
          
            <Title><strong>Monthly Staking Rewards</strong></Title>
            <ParagraphTitle><strong>Check your monthly $TAO staking rewards and the $NEURON generated through FirstTensor.</strong></ParagraphTitle>
          
  
          <RewardsForm onSubmit={handleSubmit}>
            <div className="form-group">
              <RewardsInput 
                type="text" 
                id="tao_wallet" 
                name="tao_wallet" 
                required 
                placeholder="Enter your TAO staking wallet address"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
            </div>
            <div className="button-area m-t-1">
              <Button type="submit">
                <span className="button-text">Search →</span>
                <span className="icon-button m-l-2">
                  <span className="ti-arrow-right"></span>
                </span>
              </Button>
            </div>
          </RewardsForm>
        </RewardsCard>
      </Rewards>
    );
  };
