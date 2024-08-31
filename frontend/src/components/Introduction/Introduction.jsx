import React from "react";
import {IntroductionButton, IntroductionContainer, IntroductionImg, IntroductionSection} from "./introduction.styles"
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { ButtonBorder, Paragraph, Title } from "../../styles/style";
import { introImg } from "../../constants/data";

export default function Introduction() {
    const { myRef, isVisible } = useScrollAnimation('intro-text');
    return (
        <IntroductionSection>
            <IntroductionContainer
                as={motion.div}
                id='intro-text'
                ref={myRef}
                initial={{ opacity: 0, y: 100 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
            >
                <Title>CORTEX is the 1st Bittensor Validator powered by the people</Title>
                <Paragraph>As a Validator we help to secure one of the largest decentralized, blockchain-based, neural network in the world. This allows us to actively participate in the consensus mechanism of the network and earn TAO rewards. People can stake/delegate TAO trustlessly to us and earn <span style={{color: 'var(--color-blue)'}}>$TAO</span> & <span style={{color: 'var(--color-blue)'}}>Bitneuron</span> tokens rewards passively.</Paragraph>
                <IntroductionButton>
                <ButtonBorder href="">Let’s get started</ButtonBorder>
                <ButtonBorder background="#030F1A" href="">Get demo</ButtonBorder>
                </IntroductionButton>
                <Paragraph color='#868C91'>Relied on by the world’s best engineering teams</Paragraph>
                <IntroductionImg>
                {introImg.map(img => <img src={img.img} width={img.width} alt="Logo" />)}
                </IntroductionImg>
            </IntroductionContainer>
        </IntroductionSection>
    )
}