import { motion } from "framer-motion";
import styled from "styled-components";

export const EcosystemContainer = styled.div`
    position: relative;
    width: 50%;
    left: 10%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 10rem;

    @media (max-width: 800px) {
        width: 64%;
        left: 0;
        margin: 0 auto;
    }

    @media (max-width: 450px) {
        width: 80%;
    }
`

export const EcosystemIntro = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    min-height: 100vh;

     @media (max-width: 800px) {
        align-items: center;
        justify-content: center;
    }
`

export const EcosystemTitle = styled(motion.div)`

    h1 {
        font-size: 64px;
        font-weight: 600;
        color: var(--color-white);
    }

`

export const EcosystemDataContainer = styled.div`

`