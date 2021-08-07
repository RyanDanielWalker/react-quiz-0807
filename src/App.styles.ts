import styled, { createGlobalStyle } from "styled-components";
import BGImage from './images/quiz.jpeg'

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%
}

body {
  background-image: url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: 'Abril Fatface', cursive;
}
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
  color: "white";
}

.score {
  color: black;
  font-size: 2rem;
  margin: 0;
}

h1 {
  color: black;
  background-image: linear-gradient(180deg, white, black);
  background-size: 100%;
  padding: 15px;
  background-clip: text;
  --webkit-background-clip: text;
  --webkit-text-fill-color: transparent;
  --moz-background-clip: text;
  --moz-background-color: transparent;
  filter: drop-shadow(2px 2px white);
  font-size: 70px;
  font-weight: 400;
  text-align: center;
  margin: 20px;
}

.start, .next {
  cursor: pointer;
  background: linear-gradient(180deg, white, black);
  border: 2px solid black;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
  border-radius: 10px;
  height: 40px;
  margin: 20px 0;
  padding: 0 40px;
  color: black;
  font-size: larger;
}

.start {
  max-width: 200px;
}

/* .border {
  border: 2px solid black;
  background: linear-gradient(180deg, white, black);
  margin-top: 100px;
} */
`