import './App.css';
import Swagger from './components/Swagger';
import APIYaml from './docs/api.yaml';

function App() {
    return (
        <div className="">
            <Swagger url={APIYaml} />
        </div>
    );
}

export default App;
