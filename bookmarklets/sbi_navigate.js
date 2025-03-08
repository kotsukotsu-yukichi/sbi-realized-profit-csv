javascript:(function(){
  let inputDate = prompt("移動する日付を YYYY/MM/DD 形式で入力してください（空欄で本日）:");
  let d = inputDate ? new Date(inputDate) : new Date();
  let f = d.getFullYear() + "/" + ("0"+(d.getMonth()+1)).slice(-2) + "/" + ("0"+d.getDate()).slice(-2);
  window.location.href = `https://site.sbisec.co.jp/account/assets/profits?baseDateType=CONTRACT&baseDateFrom=${f}&baseDateTo=${f}&product=DOMESTIC_STOCK&category=MARGIN`;
})();
