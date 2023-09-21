import styled from 'styled-components';

export const ModalContent = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding-top: 30px; /* Add padding to the top */
  padding-right: 20px; /* Add padding to the right */
  padding-left: 20px; /* Add padding to the left */
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const QuizTime = styled.h2`
  color: #333;
`;

export const QuizImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;

export const BackgroundColor = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 8px;
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #000;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #333;
  max-height: 200px;
  overflow-y: auto;
`;

export const StartButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 3px;
  right: 30px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  z-index: 1; /* Ensure the button is above the content */
  margin-right: -20px; /* Add margin to adjust the position */
`;
