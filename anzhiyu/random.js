var posts=["2025/05/15/GitKey 配置文件管理工具/","2025/05/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };