import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
            <img src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/type_logo.png' />
            <p><small>&copy; 2023 HOGEHOGEHOGE</small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
