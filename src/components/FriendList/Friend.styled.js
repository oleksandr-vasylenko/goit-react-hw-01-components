import styled from 'styled-components';

export const FriendItem = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const StatusSign = styled.span`
  width: 15px;
  height: 15px;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
