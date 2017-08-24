//endswith

String.prototype.endsWith = function(suffix) {
    return this.match(suffix+"$") == suffix;
};

"monika.chinna".endsWith("chinna");



  



//array of condensed ranges

var data = [
     { start: 0, end: 1 }, 
     { start: 2, end: 4 },
     { start: 3, end: 8 },
     { start: 10, end: 12 }],
   
    result = data
        .sort(function (a, b) { return a.start - b.start || a.end - b.end; })
        .reduce(function (r, a) {
            var last = r[r.length - 1] || [];
            if (last.start <= a.start && a.start <= last.end) {
                if (last.end < a.end) {
                    last.end = a.end;
                }
                return r;
            }
            return r.concat(a);
        }, []);

console.log(result);