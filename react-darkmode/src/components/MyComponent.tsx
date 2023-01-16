import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';
import { Theme } from '../styles/theme';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: dodgerblue;
`;

const Content = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${(props: Theme) => props.body};
  color: ${(props: Theme) => props.text};
  padding: 16px 20px;
`;

const ToggleBtn = styled.button`
  background-color: ${(props: Theme) => props.toggleBackground};
  color: ${(props: Theme) => props.text};
`;

export default function MyComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      <Content {...theme}>
        <ToggleBtn onClick={() => toggleTheme()} theme={theme}>
          테마 변경
        </ToggleBtn>
        <div>테마 적용</div>
      </Content>
    </Container>
  );
}
