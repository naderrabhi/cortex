import { motion } from "framer-motion";
import styled from "styled-components";

export const EcosystemText = styled(motion.div)`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 24px;

    p:nth-of-type(1) {
        margin-top: 1rem;
        color: #d9d9d9;
    }

    p:not(:first-child) {
        color: #d9d9d9; 
    }
`