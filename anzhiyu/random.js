var posts=["2025/05/15/hello-world/","2025/05/15/GitKey 配置文件管理工具/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };