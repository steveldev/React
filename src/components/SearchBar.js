const SearchBar = () => {

    return (
        <section className="search">
            <form className="searchbar">
                <input type="text" name="keywords" placeholder="Rechercher un produit" className="form-control" />
                <button>OK</button>
            </form>
        </section>
        );
       
}
export default SearchBar;