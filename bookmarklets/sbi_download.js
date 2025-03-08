javascript:(function(){
  let b=document.querySelector("button.text-xs.link-light");
  if(b){ b.click(); console.log("✅ CSV ダウンロードを実行しました！"); }
  else { console.error("❌ CSVダウンロードボタンが見つかりません！"); }
})();