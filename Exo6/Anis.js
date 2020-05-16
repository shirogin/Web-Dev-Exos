/* this is a function to inverse a list */
var list=[20,87,945,75,64,972,678,45];
function inverse (list)
{
    var n= list.length -1;
    var j=n;
    var i=0;
    while (i<n/2)
    {
        var x= list[i];
        list[i]=list[j];
        list[j]=x;
        i++;
        j--;
    }
    console.log(list);
}

/* this function verifies if all the elements of the lists are equql */
function verify (list)
{
    var n= list.length -1;
    var b= true;
    var i=0;
    while (i<n && b=== true)
    {
        if (list[i]===list[i+1]) {i++;}
        else {b=false;}
    }

    console.log(b);
}