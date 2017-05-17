// exports.toMataUang = function(matauang, nominal) {
let to = {}
to.rupiah = function(nominal) {
  arr = nominal.split('').reverse()
  let tmp = []
  for (let i = 0; i < arr.length; i++){
    tmp.push(arr[i])
      if((i+1) % 3 == 0){
        tmp.push('.')
      }
  }
  return `Rp. ${tmp.reverse().join('')},00`
}

exports.to
