function simpleNumber() {
    var limit=+prompt("Limit");
    var inputArray = [];
    var sum=0;
    for (var i=0;i<limit-1;i++){
        inputArray[i]=i+2;
    }
    var index = 0;
    var p=inputArray[index];
    while (p*p<limit) {
        for (var i = index+p; i < limit-1; i = i + p) {
            inputArray[i] = 0;
        }
        for (var i=index + 1;i<limit-1;i++){
            if (inputArray[i]!=0){
                p=inputArray[i];
                index=i;
                break;
            }
        }

    }
    for (var i=0;i<inputArray.length;i++){
        sum+=inputArray[i];
    }
    alert(sum);

}