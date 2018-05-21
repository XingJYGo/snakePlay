/**
 * Created by luodianlei on 2018/5/18.
 */

//用于存放一些常用的功能性的函数
  
//   function getRandom(){
//
// }
var Tool = {
  //获取min - max之间的随机整数
  getRandom: function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Tool.getRandom()
