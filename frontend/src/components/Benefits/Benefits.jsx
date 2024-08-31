import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { Button, ParagraphTitle } from '../../styles/style';
import { BenefitsContainer, BenefitsTitle, BenefitsText, BenefitsSection, BenefitsCards, BenefitsCardsContainer, BenefitsImg, BenefitsCardsText } from './benefits.styles';
import { motion } from 'framer-motion';
import delegators from '../../assets/images/delegators.png'
import neuron from '../../assets/images/neuron.png'
import { cortextCluster, ftNeuronHolders, taoDelegators } from '../../constants/data';
import CortextText from '../CortextText/CortextText';

export default function Benefits() {
    const { myRef, isVisible } = useScrollAnimation("benefits");
    const [visibleSection, setVisibleSection] = useState(null);

    const toggleText = (id) => {
        setVisibleSection(prev => prev === id ? null : id);
    };

    return (
        <BenefitsSection
            as={motion.div}
            id='benefits'
            ref={myRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
        >
            <BenefitsTitle style={{width: '65%'}}>What are the benefits of being a Cortex holder/delegator?</BenefitsTitle>
            <BenefitsContainer>
                <BenefitsCardsContainer>
                    <BenefitsCards>
                        <BenefitsImg>
                            <img src={delegators} alt=''/>
                            <ParagraphTitle style={{marginBottom: '0.5rem'}}>TAO Delegators</ParagraphTitle>
                            <Button 
                                className="custom-btn" 
                                style={{ backgroundColor: '#fdc60c' }} 
                                onClick={() => toggleText('delegatorsText')}
                            >
                                {visibleSection === 'delegatorsText' ? 'Hide benefits' : 'Show benefits'}
                            </Button>
                        </BenefitsImg> 
                    </BenefitsCards>
                    <BenefitsCards>
                        <BenefitsImg>
                            <img src={neuron} alt=''/>
                            <ParagraphTitle style={{marginBottom: '0.5rem'}}>FT Neuron Holders</ParagraphTitle>
                            <Button 
                                className="custom-btn" 
                                onClick={() => toggleText('neuronHoldersText')}
                            >
                                {visibleSection === 'neuronHoldersText' ? 'Hide benefits' : 'Show benefits'}
                            </Button>
                        </BenefitsImg>
                    </BenefitsCards>
                </BenefitsCardsContainer>
            
                <BenefitsCardsText>
                        <BenefitsText className="benefits-text" id="delegatorsText" style={{ display: visibleSection === 'delegatorsText' ? 'flex' : 'none' }}>
                        <CortextText cortext={taoDelegators}/>
                        </BenefitsText>
                        <BenefitsText className="benefits-text" id="neuronHoldersText" style={{ display: visibleSection === 'neuronHoldersText' ? 'flex' : 'none' }}>
                        <CortextText cortext={ftNeuronHolders}/>
                        </BenefitsText>
                </BenefitsCardsText>
            </BenefitsContainer>
        </BenefitsSection>
    );
}
