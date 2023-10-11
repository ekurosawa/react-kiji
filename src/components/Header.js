import React from 'react';


class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="news" className="big-bg">
          {/* ヘッダーを作成*/}
          <header className="page-header wrapper">
            {/*<h1>にロゴを配置 alt imgで指定された画像が読み込まれない場合に表示する代替テキスト*/}
            <h1>
              <a href="home.html"><img className="logo" src="/images/ohanamc.jpg" alt="flower" /></a>
            </h1>
            <nav>
              <ul className="main-nav">
                <li><a href="news.html">Hoge</a></li>
                <li><a href="menu.html">Huga</a></li>
                <li><a href="contact.html">Gehogeho</a></li>
              </ul>
            </nav>
            </header>
          {/* コンテンツを作成*/}
          {/*divはdivision、分割という意味があり、コンテンツを分割し、グループ化する働きをする
          <div class="home-content wrapper
                <h2 className="page-title">hogehoge</h2>
                  <p>hugahugahugahugahugahugahugahugahugahugahughauhugahuga</p>
                    <a className="button" href="menu.html">月ゼhoge</a>
            </div>*/}

      
            {/*見出し部分*/}
            <div className="wrapper">
              <h2 className="page-title">HOGE</h2>
              </div>
            </div >
          
        </React.Fragment>
      );
  }
}

export default Header;
