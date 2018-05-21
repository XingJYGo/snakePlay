(function () {
//    1 ������Ϸ����Ҫ�����ߺ�ʳ��,
//     ������Ϸ����Ӧ��ӵ���ߵ�ʵ����ʳ���ʵ��
    //�洢��ʱ����id
    var timeid;
    function Game() {
        this.snake = new Snake();
        this.food = new Food();
    }

    //2 ��ʼ��Ϸ
    Game.prototype.start = function () {
        this.snake.render();
        this.food.render();

        // 2-1 ��Ϸһ��ʼ,�ߺ�ʳ�����Ⱦ����
        timeid = setInterval(function () {
            //2-2 -1 �ߵ����ݸı�
            this.snake.move();
           // 2-3 �ж����Ƿ񵽴�߽�
            var snakeHead = this.snake.body[0];
            //2-3-1 ����ͷ�����ƶ���ˮƽ/��ֱ��������λ��
            var maxX = map.offsetWidth/this.snake.width -1;
            var maxY = map.offsetHeight/this.snake.height -1;
            if (snakeHead.x <0 ||snakeHead.x > maxX ||snakeHead.y <0 ||snakeHead.y > maxY){
                clearInterval(timeid);
                alert("gave over");
                //ע:��X������Χ,����Ӧ������ֹ,
                // ��ֹ2-2-2 ��Ⱦ����һ������.չʾ����
                return;
            }


            //2-4 �߳�ʳ��
            //����: ��ͷ������ �� ʳ��������غ�
            var snakeX = snakeHead.x * this.snake.width;
            var snakeY = snakeHead.y * this.snake.height;
            var foodX =  this.food.x;
            var foodY = this.food.y;

            //�����������, ֤���Ե���ʳ��
             if (snakeX === foodX && snakeY === foodY){
                 // 2-4-1 ʳ����ʧ, ��Ⱦ��ʳ��
                 this.food.render();
                 // 2-4-2 ��,�䳤
                 //    ��ʵ������snake.body.push���¶���
                 //    bug: Ϊ�˽��������߽����µ�����, ���ߵ����һ�ڶ���,��Ϊ�µĶ���.
                 var last = this.snake.body[this.snake.body.length -1];
                 this.snake.body.push({
                     x:last.x,
                     y:last.y,
                     col:last.col
                 })
                 // this.snake.body.push(last);
                 // ע:last�����Ѿ�����������,
             }
            //2-2 -2��Ⱦ��ҳ����,�����������߶�����
            this.snake.render();

        }.bind(this), 150)

        // 3 ��ҳ��ע����̰��µ��¼�
        // 3-1 �����û��Ƿ�������,��,��,�ҵİ���

        document.onkeydown = function(e){
            // console.log(this);
            e = e || window.event;
            console.log(e.keyCode);
            // ��37  ��38  ��39   ��40
            switch(e.keyCode){

                case 37:
                    //3-11 ��Ҫ�ҵ���,�޸��ߵ�direction����
                    //��ֹԭ�ص�ͷ
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
                    if(this.snake.direction === 'top') return; //���if��ֻ��һ�д���Ϳ��Բ�д������,Ȼ����һ�д���Ҫ������if����ǵüӷֺ�
                    this.snake.direction = 'bottom';
                    break;

            }
        }.bind(this);



    };

    //2-2 �߱�������ȫ��
    window.Game = Game;

})();