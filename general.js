function general(a,b,c){
  this.a = a
  this.b = b
  this.c = c
  this.finalResult = 0

  this.mult1 = function(){
    return 4 * this.a * this.c
  }
  this.square = function(){
    return Math.pow(this.b,2)
  }

  this.root = function(){
    return Math.sqrt(this.square() - this.mult1())
  }

  this.substract = function(){
    return (-1 * this.b) - this.root()
  }

  this.mult2 = function(){
    return 2 * this.a
  }

  this.result = function(){
    this.finalResult = this.substract() / this.mult2()
    return this.finalResult
  }

  this.result()
}

var answer = new general(4,6,2)
console.log(answer.finalResult)
