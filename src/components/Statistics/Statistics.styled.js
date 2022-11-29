import styled from 'styled-components';

function getColor() {
  return (
    'hsl(' +
    360 * Math.random() +
    ',' +
    (25 + 70 * Math.random()) +
    '%,' +
    (85 + 10 * Math.random()) +
    '%)'
  );
}

export const Section = styled.section`
  margin-top: 32px;
  width: 320px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const StatTitle = styled.h2`
  font-weight: 700;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #ffffff;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;

  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-basis: 25%;
  background-color: ${getColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const StatLabel = styled.span`
  margin-bottom: 8px;
  color: #696969;
  font-size: 16px;
`;

export const StatPercentage = styled.span`
  margin-bottom: 8px;
  color: #696969;
  font-size: 20px;
  font-weight: 700;
`;
