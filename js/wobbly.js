function Wobbly(canvas){
	this.canvas = canvas;
	this.context = this.canvas.getContext("2d");
	this.elasticDistanse = 200;
	this.distanseLeft = this.elasticDistanse;
	this.distanseRight = this.elasticDistanse;
	this.color = "#43bee6";
	this.width = this.canvas.width;
	this.height = this.canvas.height;
	this.frame = 0;
	this.draw = function(){
		this.context.beginPath();
		this.context.fillStyle = this.color;
		this.context.moveTo(this.elasticDistanse, 0);
		this.context.bezierCurveTo(this.distanseLeft, 0, this.distanseLeft, this.height, this.elasticDistanse, this.height);
		this.context.lineTo(this.width - this.elasticDistanse,this.height);
		this.context.bezierCurveTo(this.width - this.distanseRight, this.height, this.width - this.distanseRight, 0, this.width - this.elasticDistanse, 0);
		this.context.lineTo(this.elasticDistanse,0);
		this.context.fill();
	}
	this.animate = function(dir){
		this.frame++;
		this.clear();
		if(dir == "left")
		{
			this.moveTo(1);
			this.draw();
		}
		else if(dir == "right")
		{
			this.moveTo(-1);
			this.draw();
		}
	}
	this.moveTo = function(d){
		if(this.frame < 10)
			{
				this.distanseLeft = this.distanseLeft - (10 * d);
				this.distanseRight = this.distanseRight + (10 * d);
			}
			else if(this.frame > 10 && this.frame < 20)
			{
				this.distanseLeft = this.distanseLeft + (10 * d);
				this.distanseRight = this.distanseRight - (10 * d);
			}
			else if(this.frame > 20 && this.frame < 25)
			{
				this.distanseLeft = this.distanseLeft - (3 * d);
				this.distanseRight = this.distanseRight + (3 * d);
			}
			else if(this.frame > 25 && this.frame < 30)
			{	
				this.distanseLeft = this.distanseLeft + (3 * d);
				this.distanseRight = this.distanseRight - (3 * d);
			}
			else if(this.frame > 30 && this.frame < 35)
			{
				this.distanseLeft = this.distanseLeft - (3 * d);
				this.distanseRight = this.distanseRight + (3 * d);
			}
			else if(this.frame > 35 && this.frame < 40)
			{
				this.distanseLeft = this.distanseLeft + (3 * d);
				this.distanseRight = this.distanseRight - (3 * d);
			}
	}
	this.clear = function(){
		this.context.clearRect(0,0,this.width,this.height);
	}
}