import './Home.css';
import avatar from './Denis-Novik.jpeg'


function Home() {
  return (
    <div className="section" id="home">
        <div className="container">
            <div className="above-the-picture">
                <h1>Denis <br/> Novik</h1>
                <p>UX | UI designer
                <br/>24 years old, Minsk</p>
            </div>
            <img src={avatar} alt="Denis Novik" />
        </div>
    </div>
  );
}

export default Home;