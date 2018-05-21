(function () {
    var arr = []; //用于存储蛇的每一节数据

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

        //2-1 根据body中的个数,动态的创建蛇节
        this.body.forEach(function (item, index) {
            //2-0 动态的创建蛇节
            var snakeNode = document.createElement('div');
            //2-4 遍历添加蛇节新数据
            arr.push(snakeNode);
            snakeNode.style.width = this.width + 'px';
            snakeNode.style.height = this.height + 'px';
            snakeNode.style.position = 'absolute';
            snakeNode.style.left = item.x * this.width + 'px';
            snakeNode.style.top = item.y * this.height + 'px';
            snakeNode.style.backgroundColor = item.col;
            map.appendChild(snakeNode);

        }.bind(this))
        //    2-2 上面的this是在snake里面,指向snake.`
        //    否则,默认指向window
    };



    //3 蛇移动的方法:body 头数组赋值给身体.
    Snake.prototype.move = function () {
        //3-1 蛇后面的数据给前面
        for (var i = this.body.length -1; i >0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
    //   3-2暂时蛇头往右走
    //     this.body[0].x +=1;
    //
    //3-2蛇头一定的位置,要根据蛇的方向来决定
        switch(this.direction){

            case 'left':
                this.body[0].x -= 1;
                break;
            case 'right':
                this.body[0].x += 1;
                break;
            case 'top':
                this.body[0].y -= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;
        }
    };



    //赋予全局变量
    window.Snake = Snake;
})();