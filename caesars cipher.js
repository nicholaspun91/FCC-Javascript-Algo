function rot13(str) {
  let chars = str.split('')
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let alphaarr = alpha.split('')
  let newarr = []

  for (let i = 0; i < chars.length; i++){
    if (alpha.indexOf(chars[i]) > -1){
      let newindex = (alpha.indexOf(chars[i]) + 13) % 26
      newarr.push(alpha.charAt(newindex))
      }
      else
      newarr.push(chars[i])
  }
  console.log(newarr)
  console.log(alpha.indexOf(chars[4]))
  return newarr.join('');
}