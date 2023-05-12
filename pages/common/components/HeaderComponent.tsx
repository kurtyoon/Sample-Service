import React, { Component } from 'react';
import { Button, PageHeader } from 'antd';
import Auth from './Auth';

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
                <Auth/>
              </div>
            </>,
          ]}
        />
      </div>
    );
  }
}

export default HeaderComponent;
