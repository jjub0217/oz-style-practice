import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

import styled from "styled-components";
import { flexMixin } from "./styled/styled";

const StyleSection = styled.section`
  ${flexMixin({
    justify: "center",
    align: "center",
    wrap: "wrap",
    gap: 20,
  })}
  padding: 20px 40px;
`;

function App() {
  return (
    <main>
      <Header />
      <StyleSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyleSection>
    </main>
  );
}

export default App;
