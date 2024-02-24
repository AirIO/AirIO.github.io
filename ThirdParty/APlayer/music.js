const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "青石巷",
        artist: '魏琮霏',
        url: 'https://gitee.com/ZPSource/BinRepo/raw/master/%E9%AD%8F%E7%90%AE%E9%9C%8F%20-%20%E9%9D%92%E7%9F%B3%E5%B7%B7.m4a',
        cover: 'https://gitee.com/ZPSource/BinRepo/raw/master/%E9%AD%8F%E7%90%AE%E9%9C%8F%20-%20%E9%9D%92%E7%9F%B3%E5%B7%B7%20-%20Cover.jpg',
      }
    ]
});