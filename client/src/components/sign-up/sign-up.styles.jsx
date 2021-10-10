import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpButton = styled(CustomButton)`
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;