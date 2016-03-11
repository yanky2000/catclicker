function SpeedTest(...){
    this.testImplement = testImplement;
    this.testParams = testParams;
    this.repetetions = repetetions || 10000;
    this.average = 0;
}

SpeedTest.prototype = {
    startTest: function () {
        var beginTime, endTime, sumTime = 0;
        for (var i = 0, x = this.repetetions; i < x; i++) {
            beginTime = +new Date();
            this.testImplement(this.testParams);
            endTime = +new Date();
            sumTime += endTime - beginTime;
        }

        this.average = sumTime / this.repetetions;
        return console.log("Average execution across " +
                            this.repetetions + ": " +
                            this.average);
    }
};