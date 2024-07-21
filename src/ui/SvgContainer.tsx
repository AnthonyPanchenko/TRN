type PropsTypes = {
  children: React.ReactNode | Array<React.ReactNode>;
};

const SvgContainer = ({ children }: PropsTypes) => (
  <svg
    aria-hidden="true"
    height="1em"
    style={{
      fill: 'currentColor',
    }}
    viewBox="0 0 24 24"
    width="1em"
  >
    {children}
  </svg>
);

export default SvgContainer;
