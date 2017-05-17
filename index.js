// exports.toMataUang = function(matauang, nominal) {
let toMataUang = function(matauang, nominal) {
// let to = {}
// to.rupiah = function(nominal) {
  if(matauang.toLowerCase() == "rupiah"){
    arr = nominal.split('').reverse()
    let tmp = []
    for (let i = 0; i < arr.length; i++){
      tmp.push(arr[i])
      if((i+1) % 3 == 0 && nominal[i+1]){
        tmp.push('.')
      }
    }
    return `Rp. ${tmp.reverse().join('')},00`
  }
}

// exports.to
console.log(toMataUang('rupiah', '100000000'));
