import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List';
import Button from './components/Button/Button';
import Column from './components/Column/Column';
import Container from './components/Container/Container';


const App = () => {
  return (
    <div>
      <Container>
      <Hero />
      <SearchForm />
      <List/>
      </Container>
    </div>
  );
};

export default App;