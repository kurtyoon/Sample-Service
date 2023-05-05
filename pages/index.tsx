import { FC } from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Home: FC = () => {
  return (
    <div>
      <Title mark level={3}>
        Sample Service re
      </Title>
    </div>
  );
};

export default Home;
