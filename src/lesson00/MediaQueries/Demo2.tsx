export const Demo2 = () => {
  return (
    <div className="">
      {/* 2.Responsive với breakpoint là mobile theo nội dung */}
      {/* Sử dụng styled component */}
      <div>I only show up on large screens.</div>
      <div>Meanwhile, you'll only see me on small ones.</div>

      {/* Sử dụng tailwind */}
      <div>I only show up on large screens.</div>
      <div>Meanwhile, you'll only see me on small ones.</div>

      {/* Sử dụng hook useScreen của antd */}
      <div>I only show up on large screens.</div>
      <div>Meanwhile, you'll only see me on small ones.</div>
    </div>
  );
};
