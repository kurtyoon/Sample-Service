import { FC } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Home: FC = () => {
  return (
    <div>
      <Title mark level={3}>
        Sample Service
      </Title>
    </div>
  );
};

export default Home;
