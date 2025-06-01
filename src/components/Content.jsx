import styled from "styled-components";
import { flexMixin, font, gray, tag_color } from "../styled/styled";

const ContentContainer = styled.div`
  ${flexMixin({
    direction: "column",
    align: "flex-start",
    gap: 5,
  })}
  img {
    width: 300px;
    min-height: 225px;
    margin-bottom: 3px;
    border-radius: 10px;
  }
  span {
    ${font({ fontSize: 12 })}
    color: ${tag_color};
    border: 1px solid ${tag_color};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${font({ fontSize: 18, fontWeight: 600 })}
  }
  p {
    ${font({ fontSize: 12 })}
    color: ${gray};
  }
`;

export default function Content({ content }) {
  return (
    <ContentContainer className="content-container">
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
