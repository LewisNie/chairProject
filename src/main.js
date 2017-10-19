var findLastSurvivor = function(n){
    var nums = [],ins = 0, pointer = 0;
    assignNumbers(nums,n);
    while(nums.length>1){
        var currentIndex = pointer+ins;
        var deleteIndex = currentIndex%nums.length;
        pointer = deleteIndex;
        removeElementFromList(nums,deleteIndex);
        ins++;
    }
    return nums;
};

var assignNumbers = function (nums,n) {
    for(var i = 1; i<=n; i++){
        nums.push(i);
    }
};

var removeElementFromList = function (nums, index) {
    nums.splice(index,1);
    console.log(nums);
};

findLastSurvivor(4);