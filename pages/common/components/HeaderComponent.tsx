import React, { Component } from 'react';
import { Button, PageHeader } from 'antd';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="Sample"
          subTitle="nest-next practice"
          extra={[
            <>
              <div className="nav--login">
                <Button key="1">카카오로그인</Button>
              </div>
            </>,
          ]}
        />
      </div>
    );
  }
}

export default HeaderComponent;
