import React, { useState } from 'react'
import { Paragraph, ParagraphTitle, Title } from '../../styles/style'
import { DetailsPanel, ExpandableContent, ListItem , StakeContent, StakeList, StakeSection } from './stake.styles'
import { motion } from 'framer-motion'
import useScrollAnimation from '../../hooks/useScrollAnimation';
import PanelDetailImage from '../../assets/images/panel.png'
import points from '../../assets/images/points.png'
import confirm from '../../assets/images/confirm.png'
import { chevronDownIcon, chevronUpIcon } from '../../constants/icons';

export default function Stake() {
    const { myRef, isVisible } = useScrollAnimation("stake");
    const [open, setOpen] = useState(null);

    const toggleOpen = (index) => {
      setOpen(open === index ? null : index);
    };

    const stakeItems = [
      { title: 'Support Our Mission', paragraph: 'By staking with Cortex, you are not only contributing to the development of Cortex.AI but also supporting the integration of Subnet 16, our innovative infrastructure for decentralized advertising.' },
      { title: 'Double Benefits', paragraph: 'You’ll earn rewards and help secure the network...' },
      { title: 'Cortex Validators', paragraph: 'Validators play a crucial role in maintaining the security...' },
      { title: 'Other Validators', paragraph: 'When you choose Cortex, you choose a robust, scalable...' },
    ];
  
    return (
      <StakeSection>
        <StakeContent 
        as={motion.div}
        id='stake'
        ref={myRef}
        initial={{ opacity: 0, y: 100 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        >
          <Title>Why stake your TAO to Cortex?</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan turpis id nisl aliquet, vel scelerisque nisi convallis. Quisque et nisl id leo pharetra efficitur.</Paragraph>
          <StakeList>
          {stakeItems.map((item, index) => (
  <ListItem key={index} onClick={() => toggleOpen(index)}>
    <ParagraphTitle style={{display: "flex", alignItems: "center", gap: "10px"}}>
      <img src={confirm} alt="Panel Details"  />
      {item.title} {" "}
      {open === index ? chevronUpIcon.icon : chevronDownIcon.icon}                
    </ParagraphTitle>
    <ExpandableContent open={open === index}>
      <Paragraph>{item.paragraph}</Paragraph>
    </ExpandableContent>
    <img src={points} alt="Panel Details"  />
  </ListItem>
))}
          </StakeList>
        </StakeContent>
        <DetailsPanel>
          <img src={PanelDetailImage} alt="Panel Details" />
        </DetailsPanel>
      </StakeSection>
    );
  };