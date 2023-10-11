import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
      {/*コンテンツを作成 -->
        <!-- divはdivision、分割という意味があり、コンテンツを分割し、グループ化する働きをする-->
        <!--<div className="home-content wrapper">
            <h2 className="page-title">hogehoge</h2>
            <p>hugahugahugahugahugahugahugahugahugahugahughauhugahuga</p>
            <a className="button" href="menu.html">月ゼhoge</a>
        </div>*/}

    
      {/*見出し部分
        <div className="wrapper">
            <h2 className="page-title">HOGE</h2>
      </div>*/}
        

      {/*2カラムの構成*/}
        <div className="news-contents wrapper">
            <article>
                <header className="post-info">
                    <h2 className="post-title">HOGE花HUGA鳥</h2>
                    <p className="post-date">00/00 <span>2050</span></p>
                    <p className="post-cat">HUGA : 風月</p>
                </header>
                <img src="images/hashibiroclip.png" alt="トリ"/>
                <p>
                    hogehogehogehogehogehogehogehoge
                    hogehogehogehogehogehogehogehoge
                    hogehogehogehogehogehogehogehoge
                    hogehogehogehogehogehogehogehoge
                </p>
                <p>
                    hugahugahugahugahugahugahugahuga
                    hugahugahugahugahugahugahugahuga
                    hugahugahugahugahugahugahugahuga
                    hugahugahugahugahugahugahugahuga
                </p>
                <p>hoge風huga月。</p>
            </article>

            <aside>
                <h3 className="sub-title">カテゴリー</h3>
                <ul className="sub-menu">
                    <li><a href="#">hogehoge</a></li>
                    <li><a href="#">hugahuga</a></li>
                    <li><a href="#">gehogeho</a></li>
                </ul>

                <h3 className="sub-title">課長風月</h3>
                <p>
                    花鳥風月花鳥風月花鳥風月花鳥風月花鳥
                    花鳥風月花鳥風月花鳥風月花鳥風月花鳥
                    花鳥風月花鳥風月花鳥風月花鳥風月花鳥
                    花鳥風月花鳥風月花鳥風月花鳥風月花鳥
                </p>
            </aside>

            <dev className="ad">
                <img src="/images/0921.png"/>
            </dev>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
