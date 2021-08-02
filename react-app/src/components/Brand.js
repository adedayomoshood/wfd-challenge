const Brand = ({ colored }) => {
  return (
    <section className={`brand ${colored ?? 'colored'}`}>DREAMSHARE</section>
  );
};

export default Brand;
