var calculator = {
    operandLeft: "11",
    operandRight: "11",
    sum: function(){
        return +this.operandLeft+(+this.operandRight);
    },
    mul: function(){
        return +this.operandLeft*this.operandRight;
    },
    readValues: function(){
        this.operandLeft=prompt('operand1');
        this.operandRight=prompt('operand2');
    }
};
function Summator(){
    this.sum=function(){
        return this.a+this.b;
    };
    this.run=function(){
        this.a=+prompt('operand1');
        this.b=+prompt('operand2');
        alert(this.sum());
    }
};
function Adder(startingValue){
    this.test=status;
    this.value=startingValue;
    this.addInput=function(){
        this.value+=+prompt('operand1');
    };
    this.showValue=function(){
        alert(this.value);
    }
}

