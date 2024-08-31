import styled from 'styled-components';
import stakeBg from '../../assets/images/stake-bg.png'

export const StakeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-image: url(${stakeBg});
`;

export const StakeContent = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

export const StakeList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  overflow: hidden; /* Ensure the content doesn’t overflow */
`;

export const ExpandableContent = styled.div`
  max-height: ${props => props.open ? '1000px' : '0'}; /* Use a large value to handle variable content */
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

export const ListItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsPanel = styled.div`
  border-radius: 8px;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Checkmark = styled.span`
  width: 20px;
  height: 20px;
  background-color: #0078FF;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const ClusterDetail = styled.div`
  background: #222;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const ClusterDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ClusterDetailBody = styled.div`
  font-size: 0.9rem;
  line-height: 1.5;
`;
