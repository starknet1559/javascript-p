var str = "webcamp"

function foo(){
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}
//変数の巻き上げとは関数内のどの部分で変数を宣言したとしても、
//関数冒頭で変数を宣言したことと同じになるということ。
foo()