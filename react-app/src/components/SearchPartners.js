const SearchPartners = () => {
  function searchPartners(e) {
    e.preventDefault();

    console.log(e);
  }

  return (
    <section className="page-section">
      <section className="page-section__title">
        <h3>Crate your holiday activity</h3>
        <h4>Hi! What are your holiday interests?</h4>
      </section>

      <form className="search-partners" onSubmit={searchPartners}>
        <input
          type="text"
          id="searchPartnersInput"
          placeholder="Enter your interests"
          title="Enter your Interests"
        />
        <button type="submit" className="button">
          Search partners
        </button>
      </form>
    </section>
  );
};

export default SearchPartners;
