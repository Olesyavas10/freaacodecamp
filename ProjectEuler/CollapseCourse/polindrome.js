
function isPolindrome(str)
{
    return str===str.split('').reverse().join('')
}
console.log(isPolindrome('potop'))

