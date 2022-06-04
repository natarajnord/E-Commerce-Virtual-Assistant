function getIndex(s)
{
    var categories=context.categories 
    for(var i=0;i<categories.length;i++)
    {
        if(categories[i]===s)
                return i
    }
    retern -1;
}

//high to low
function sortOnDescend(arr, key) {
    arr.sort(function(a, b) {
        if (a[key] > b[key]) {
            return -1;
        } else if (a[key] < b[key]) {
            return 1;
        }
        return 0;
    });
}