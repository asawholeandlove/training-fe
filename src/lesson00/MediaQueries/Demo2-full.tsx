import styled from "styled-components";
import theme from "~/theme";
import useBreakpoint from "~/hooks/useBreakpoint";

const Container = styled.div`
  .large {
    display: none;
  }

  @media (min-width: ${theme.screens.sm}) {
    .large {
      display: block;
    }

    .small {
      display: none;
    }
  }
`;

export const Demo2Full = () => {
  const screens = useBreakpoint();

  return (
    <div className="">
      {/* 2.Responsive với breakpoint là mobile theo nội dung */}
      {/* Sử dụng styled component */}
      <Container>
        <div className="large">I only show up on large screens.</div>
        <div className="small">
          Meanwhile, you'll only see me on small ones.
        </div>
      </Container>
      <hr />

      {/* Sử dụng tailwind */}
      <div className="hidden sm:block">I only show up on large screens.</div>
      <div className="block sm:hidden">
        Meanwhile, you'll only see me on small ones.
      </div>
      <hr />

      {/* Sử dụng hook useScreen của antd */}
      {screens.sm && <div>I only show up on large screens.</div>}
      {!screens.sm && <div>Meanwhile, you'll only see me on small ones.</div>}
    </div>
  );
};
