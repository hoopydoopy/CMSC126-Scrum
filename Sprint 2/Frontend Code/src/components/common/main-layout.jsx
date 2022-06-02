import { Layout, Menu } from 'antd';
import { Outlet, useLinkClickHandler, useNavigate } from 'react-router-dom';

const { Header, Footer, Content } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate()

  const items = [
    {
      key: '',
      label: 'Home'
    },
    {
      key: 'gallery',
      label: 'Gallery'
    },
    {
      key: 'about-me',
      label: 'About Me'
    },
    {
      key: 'contact',
      label: 'Contact'
    },
  ]

  const handleOnClick = (data) => {
    navigate(data.key)
  }

  return (
    <Header
      style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu
        className={'container mx-auto font-nixie-one'}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['']}
        items={items}
        onClick={handleOnClick}
      />
    </Header>
  )
}

const MainLayout = () => {
  return (
    <Layout>
      <HeaderComponent/>
      <Content className={'container mx-auto'} style={{ marginTop: 100 }}>
        <div style={{ minHeight: '85vh' }}>
          <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>The Wanderer</Footer>
    </Layout>
  )
}

export default MainLayout