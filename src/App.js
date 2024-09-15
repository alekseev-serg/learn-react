import './App.css';

function App() {
  return (
      <div>
          <Header />
          <Tecnologies />
      </div>
  );
}

const Header = () => {
  return (
      <div>
          <a href="#s">Home</a>
          <a href="#s">News</a>
          <a href="#s">Blog</a>
      </div>
  );
}

const Tecnologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>JS</li>
                <li>RACT</li>
            </ul>
        </div>
    );
}
export default App;
