import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

export const QuizImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: fill;
  border-radius: 5px;
`;

export const BackgroundColor = styled.div`
  color: #000000;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  padding: 5px 10px;
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  margin-top: 10px;
  max-width: 100%;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  max-width: 100%;
`;

export const Button = styled.button`
  font-family: 'Ringbearer';
  width: 100px;
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
  gap: 10px;
`;
