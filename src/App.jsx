import { Layout, Menu } from 'antd';
import 'antd/dist/reset.css'; // make sure this is imported
import LoginPage from './pages/LoginPage';

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <LoginPage/>
  );
}

export default App;