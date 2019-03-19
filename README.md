---
typora-root-url: ./
typora-copy-images-to: ./
---

### **JavaScript 经典面向对象Demo-贪吃蛇**..............

![snake](/snake.gif)

​    1 面向对象编程思想在程序项目中有着非常明显的优势:

​     1- 1 代码可读性高.由于继承的存在，即使改变需求，那么维护也只是在局部模块

​     1- 2 维护非常方便并且成本较低。

​     2 这个demo是采用了面向对象的编程思想. 用JavaScript 语言编写的游戏小程序--贪吃蛇.

​       代码注释详细,逻辑清晰 . 非常适合新手前端开发者, 锻炼JavaScript语言的面向对象的编程思想.  

​      欢迎大家下载. 觉得好的话,随手给个star,  您的star是我最大的动力! 

  

3 核心代码片段展示:

 food.js--设计食物对象

```
function Food(option) {
  //防止用户不传参数会报错
  option = option || {};
  this.width = option.width || 20;
  this.height = option.height || 20;
  this.bgc = option.bgc || 'orange';
  this.x = option.x || 0;
  this.y = option.y || 0;
  this.borderRadius = option.borderRadius |10;
}
```



snake.js--设计蛇对象

```
// 1 创建蛇对象
function Snake(option) {
    option = option || {};
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.body = [
        {x: 3, y: 2, col: 'green'},//蛇头的位置和颜色
        {x: 2, y: 2, col: 'orange'},//蛇头身体的位置和颜色
        {x: 1, y: 2, col: 'orange'}];
    this.direction = option.direction || 'right';
}


//2 渲染蛇的方法
Snake.prototype.render = function () {
    // 2-3 为了防止多个sanke渲染到页面上,一渲染之前先清除掉原来的
    for (var i = 0; i < arr.length; i++) {
        map.removeChild(arr[i]);//移除页面上的蛇节
    }
    arr.splice(0,arr.length);//蛇节都被移除掉了,那么数组中也应该都移除.
```





  game.js--设计游戏对象11111

```
//2 开始游戏
Game.prototype.start = function () {
    this.snake.render();
    this.food.render();

    // 2-1 游戏一开始,蛇和食物就渲染出来
    timeid = setInterval(function () {
        //2-2 -1 蛇的数据改变
        this.snake.move();
       // 2-3 判断蛇是否到达边界
        var snakeHead = this.snake.body[0];
        //2-3-1 求蛇头可以移动的水平/垂直坐标的最大位置
        var maxX = map.offsetWidth/this.snake.width -1;
        var maxY = map.offsetHeight/this.snake.height -1;
        if (snakeHead.x <0 ||snakeHead.x > maxX ||snakeHead.y <0 ||snakeHead.y > maxY){
            clearInterval(timeid);
            alert("gave over");
            //注:当X超出范围,代码应立即终止,
            // 防止2-2-2 渲染出下一个盒子.展示出来
            return;
        }
```