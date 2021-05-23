
import Nav from './nav';
import Products from './Products.js';
import SearchBar from './SearchBar.js';

const Home = () => {
    
    const test = () => {
        window.onload = () => {
            //console.log(document.querySelectorAll('h2').length)
            // affiche / masque la section au clic sur le titre
            document.querySelectorAll('h2').forEach(element => {
                element.addEventListener('click', e => {
                   e.target.nextSibling.classList.toggle('d-none');
                });
            });
        };
    };

    test();

    return (
        <main className="App">
            <header>
                <Nav />
            </header>

            <h1>Home</h1>
            <SearchBar />
            <Products />
        </main>
    );
};

export default Home;