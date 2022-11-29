import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;
  max-height: 400px;

  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.img`
  border-radius: 50%;
  display: block;
  object-fit: cover;
  width: 200px;
`;

export const Description = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  gap: 10px;

  flex-direction: column;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #f3f6f9;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const StatList = styled.li`
  display: flex;
  flex-direction: column;
`;
