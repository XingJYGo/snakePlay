(function () {
//    1 由于游戏对象要控制蛇和食物,
//     所以游戏对象应该拥有蛇的实例和食物的实例
    //存储定时器的id
    var timeid;
    function Game() {
        this.snake = new Snake();
        this.food = new Food();
    }

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


            //2-4 蛇吃食物
            //依据: 蛇头的坐标 和 食物的坐标重合
            var snakeX = snakeHead.x * this.snake.width;
            var snakeY = snakeHead.y * this.snake.height;
            var foodX =  this.food.x;
            var foodY = this.food.y;

            //如果符合条件, 证明吃到了食物
             if (snakeX === foodX && snakeY === foodY){
                 // 2-4-1 食物消失, 渲染新食物
                 this.food.render();
                 // 2-4-2 蛇,变长
                 //    其实就是往snake.body.push个新对象
                 //    bug: 为了解决新添加蛇节闪下的问题, 把蛇的最后一节对象,作为新的对象.
                 var last = this.snake.body[this.snake.body.length -1];
                 this.snake.body.push({
                     x:last.x,
                     y:last.y,
                     col:last.col
                 })
                 // this.snake.body.push(last);
                 // 注:last本身已经在数组中了,
             }
            //2-2 -2渲染到页面上,真正看到的蛇动起来
            this.snake.render();

        }.bind(this), 150)

        // 3 给页面注册键盘按下的事件
        // 3-1 监听用户是否按下了上,下,左,右的按键

        document.onkeydown = function(e){
            // console.log(this);
            e = e || window.event;
            console.log(e.keyCode);
            // 左37  上38  右39   下40
            switch(e.keyCode){

                case 37:
                    //3-11 需要找到蛇,修改蛇的direction属性
                    //防止原地掉头
                    if(this.snake.direction === 'right'){
                        return;
                    }
                    this.snake.direction = 'left';
                    break;
                case 38:
                    if(this.snake.direction === 'bottom'){
                        return;
                    }
                    this.snake.direction = 'top';
                    break;
                case 39:
                    if(this.snake.direction === 'left'){
                        return;
                    }
                    this.snake.direction = 'right';
                    break;
                case 40:
                    if(this.snake.direction === 'top') return; //如果if中只有一行代码就可以不写花括号,然后这一行代码要紧跟在if后面记得加分号
                    this.snake.direction = 'bottom';
                    break;

            }
        }.bind(this);



    };

    //2-2 蛇变量赋予全局
    window.Game = Game;

})();