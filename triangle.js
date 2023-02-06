window.addEventListener("load", runapp);
function runapp() 
{

   const btn = document.getElementById("calc");
   console.log(btn);
   btn.addEventListener("click", triangle);


function triangle() 
{

    let returntext;
  let sizeOne;
  let sizeTwo;
  let sizeThree;

   sizeOne = parseInt(document.getElementById("side1").value);
   sizeTwo = parseInt(document.getElementById("side2").value);
   sizeThree = parseInt(document.getElementById("side3").value);

   let numArray = [sizeOne, sizeTwo, sizeThree];

   let equal;
   let isTriangle;

   numArray.sort(function(a, b){return a - b});
    equal = compare(numArray);
    isTriangle = law(numArray);

    if(!isTriangle)
    {
        returntext = "Not a triangle"
    }
    else if(equal === 3)
    {
        returntext = "Equilateral"
    }
    else if(equal === 2)
    {
        returntext = "Isosceles"
    }
    else if(equal === 0)
    {
        returntext = "Scalene"
    }
    else
    {
        returntext = "non-euclidean"
    }
    document.getElementById("output").innerHTML = (returntext);
}

function compare(numArray)
{
    
    console.log(numArray);
let x = 0;
    for(i = 0; i < numArray.length; i++)
    {
        for(y = i + 1; y < numArray.length; y++)
        {
            console.log(numArray[i], numArray[y])
        console.log(i, y, x);

            if(numArray[i] === numArray[y] && i != y)
            {
                x += 1;
                
            }
        }
    }
console.log(x);
if(x === 1)
{
    x += 1;
}
return x;
}

function law(numArray)
{
    if(numArray[0] + numArray[1] <= numArray[2])
    {
        console.log(numArray[0] + numArray[1]);
        return false;
    }
    return true;
}

}