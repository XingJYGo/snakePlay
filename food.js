// 封装一个食物对象
//沙箱模式
(function(){

	// 1
  var container; //用于存储之前的食物。
    //防止用户不传参数会报错。
    option = option || {};
    this.width = option.width || 20;
    this.height = option.height || 20;
    this.bgc = option.bgc || 'orange';
    this.x = option.x || 0;
    this.y = option.y || 0;
    this.borderRadius = option.borderRadius |10;
  }

  Food.prototype.render = function () {
    //每一次渲染新的之前就把原来的移除掉
    if(container){
      map.removeChild(container);
    }
    // 创建食物对象
    var food = document.createElement('div');
    //存到全局变量里
    container = food;
    food.style.width = this.width + 'px';
    food.style.height = this.height + 'px';
    food.style.backgroundColor = this.bgc;
    food.style.position = 'absolute';
      //获得随机位置
      //由于要让食物的位置在每一个格子里面,所有获取随机数的算法要重新计算
    this.x = Tool.getRandom(0, (map.offsetWidth/ this.width-1)) * this.width;
    this.y = Tool.getRandom(0, (map.offsetHeight/ this.height-1)) * this.height;
    food.style.left = this.x + 'px';
    food.style.top = this.y + 'px';
    food.style.borderRadius = this.borderRadius + 'px';
    //渲染上食物
    map.appendChild(food);
  }

  //因为要在全局使用Food,需要把Food拿到全局中
  window.Food = Food;
})();
