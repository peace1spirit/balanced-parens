const parensAreBalanced = (input) => {
  
  if(input.trim()=='')
    return true
  if(input==undefined)
    return false
  const dict = ['(','{','[', ']','}', ')' ]
  const temp1 = ['(','{','[']
  const temp2 = [')','}', ']']
  input =input.split('')
  var sign=[]
  for (let i = 0; i < input.length; i++) {
    if(dict.indexOf(input[i])!=-1){
      sign.push(input[i])
    }
  }
  if(sign.length % 2 !==0)
    return false
  else{
    let i = 0
    for (; i < sign.length;) {
        if(sign.length>1){         
          let penutup=temp2[temp1.indexOf(sign[i])]
          if(penutup == sign[i+1] ){
            sign.shift()
            sign.shift()
          }else if(penutup == sign[sign.length-1] ){
            sign.shift()
            sign.pop()
          }else {
              return false
          }
        }else if(sign.length==1){
          return false
        }else if(sign.length==0) {
          return true
        }
    }
    if(i==0)
      return true
  }

}

module.exports = parensAreBalanced
