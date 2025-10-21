function maximumPathSumI(triangle) {
  const tri=triangle.map(row=>[...row])

for (let i=tri.length-2; i>=0; i--)
{
for (let j = 0; j < tri[i].length; j++) {
      tri[i][j] += Math.max(tri[i + 1][j], tri[i + 1][j + 1]);
    }
}


  return tri[0][0];
}
console.log(maximumPathSumI([[3, 0, 0, 0], [7, 4, 0, 0],[2, 4, 6, 0],[8, 5, 9, 3]]))