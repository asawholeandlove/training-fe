import styled from "styled-components";

const StyledText = styled.div`
  @media (max-width: 300px) {
    color: red;
  }
`;

export const Demo1Full = () => {
  return (
    <div className="">
      {/* 1.Khi màn hình nhỏ hơn 300px, chuyển color sang màu đỏ */}

      {/* Sử dụng styled component */}
      <StyledText>Hello thế giới</StyledText>

      {/* Sử dụng tailwind */}
      {/* Khái niệm style mobile first */}
      <div className="text-red-400 sm:text-inherit">Hello thế giới</div>
      {/* Style trực tiếp */}
      <div className="max-[300px]:text-red-400">Hello thế giới</div>
    </div>
  );
};
