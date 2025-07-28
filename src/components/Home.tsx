import { TypeAnimation } from 'react-type-animation';
import { FaGithub} from 'react-icons/fa';
import './Section.css';

const Home = () => {
  return (
    <section id="home" className="section home-bg">
      <div className="background-image" />
      <div className="black-overlay" />
      <div className="home-content">
        <h1>岡田 海翔</h1>
        <TypeAnimation
          sequence={[
            '私はシニア AI 開発者です',
            1000,
            '',
            500,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
        />
        <div className='btn-groups'>
          <a href="https://github.com/cocoa19961008" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn-github">
              <FaGithub style={{ marginRight: '8px' }} /> Githubに接続する
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;