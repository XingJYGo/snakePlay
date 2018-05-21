(function () {
    var arr = []; //���ڴ洢�ߵ�ÿһ������

    // 1 �����߶���
    function Snake(option) {
        option = option || {};
        this.width = option.width || 20;
        this.height = option.height || 20;
        this.body = [
            {x: 3, y: 2, col: 'green'},//��ͷ��λ�ú���ɫ
            {x: 2, y: 2, col: 'orange'},//��ͷ�����λ�ú���ɫ
            {x: 1, y: 2, col: 'orange'}];
        this.direction = option.direction || 'right';
    }


    //2 ��Ⱦ�ߵķ���
    Snake.prototype.render = function () {
        // 2-3 Ϊ�˷�ֹ���sanke��Ⱦ��ҳ����,һ��Ⱦ֮ǰ�������ԭ����
        for (var i = 0; i < arr.length; i++) {
            map.removeChild(arr[i]);//�Ƴ�ҳ���ϵ��߽�
        }
        arr.splice(0,arr.length);//�߽ڶ����Ƴ�����,��ô������ҲӦ�ö��Ƴ�.

        //2-1 ����body�еĸ���,��̬�Ĵ����߽�
        this.body.forEach(function (item, index) {
            //2-0 ��̬�Ĵ����߽�
            var snakeNode = document.createElement('div');
            //2-4 ��������߽�������
            arr.push(snakeNode);
            snakeNode.style.width = this.width + 'px';
            snakeNode.style.height = this.height + 'px';
            snakeNode.style.position = 'absolute';
            snakeNode.style.left = item.x * this.width + 'px';
            snakeNode.style.top = item.y * this.height + 'px';
            snakeNode.style.backgroundColor = item.col;
            map.appendChild(snakeNode);

        }.bind(this))
        //    2-2 �����this����snake����,ָ��snake.`
        //    ����,Ĭ��ָ��window
    };



    //3 ���ƶ��ķ���:body ͷ���鸳ֵ������.
    Snake.prototype.move = function () {
        //3-1 �ߺ�������ݸ�ǰ��
        for (var i = this.body.length -1; i >0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
    //   3-2��ʱ��ͷ������
    //     this.body[0].x +=1;
    //
    //3-2��ͷһ����λ��,Ҫ�����ߵķ���������
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



    //����ȫ�ֱ���
    window.Snake = Snake;
})();