import HeaderComponent from './HeaderComponent';
import { Layout, Menu, Breadcrumb } from 'antd';
import { useRouter } from 'next/router';

const { Content, Sider, Footer } = Layout;

const items = [
  { label: 'save-record', key: 'save-record' }, // remember to pass the key prop
  {
    label: 'income/expense',
    key: 'sub1',

    children: [
      { label: 'daily', key: 'daily' },
      { label: 'weekly', key: 'weekly' },
      { label: 'monthly-yearly', key: 'monthly-yearly' },
    ],
  },
];

export default function CustomLayout({ children }) {
  const router = useRouter();
  const handleClick = (e) => {
    console.log(e.key);
    router.push({
      pathname: '/records/[id]',
      query: { id: e.key },
    });
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ backgroundColor: 'rgb(255, 236, 22)' }}>
        <div className="App-logo" />
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          onClick={handleClick}
          items={items}
          style={{ backgroundColor: 'rgb(255, 236, 22)', color: 'black' }}
        />
      </Sider>
      <Layout>
        <HeaderComponent />
        <Content style={{ margin: '0 16px' }}>
          <main>{children}</main>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          nest-next sample service
        </Footer>
      </Layout>
    </Layout>
  );
}
