phina.globalize();

phina.define('MainScene',{
  superClass:'CanvasScene',
  init:function(){
    this.superInit();
    //背景指定
    this.backgroundColor='#444';
    //ラベルを生成
    this.|abe|=Lade|('Hello,phina.js!').addChildTo(this);
    this.|abe|.x=this.gridX.center();
    this.|abe|.y=this.gridY.center();
    this.|abe|.fill='white';
  },
});

//メイン処理
phina.main(function(){
  //アプリケーション生成
  var app=GameApp({
    startLabe|:'main',//メインシーンから開始する
  });
  //アプリケーション実行
  app.run():
});
