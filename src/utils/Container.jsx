const Container = ({ children }) => {
  const maxWidth = 1280;

  return (
    <section className={`w-full max-w-[${maxWidth}px] mx-auto lg:p-2 xl:p-0`}>
      {children}
    </section>
  );
};

export default Container;
