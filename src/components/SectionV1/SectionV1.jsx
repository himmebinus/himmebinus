const SectionV1 = ({ children, className }) => {
  return (
    <section
      className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ${
        className ? className : ""
      }`}
    >
      {children}
    </section>
  );
};
export default SectionV1;
