function factorial(n)
{
  let factorial=1
  for (let i=1; i<=n; i++)
  {
    factorial=factorial*i
  }
  return factorial
}
function latticePaths(gridSize) {
  let a=factorial(gridSize*2)
  let b=factorial(gridSize)
let routes=a/(b**2)
  return routes;
}

console.log(latticePaths(4));
