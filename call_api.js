async function callApi() {

	let endpoint = "https://api.rss2json.com/v1/api.json";
	let feed_url = "https://node2.feed43.com/kunigamivill.xml";

	// rss feed を取得

	let res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed_url}`);
	// text を json 化
	let data = await res.json();
	
	function twitText() {
		let s = data.items[2].title;
		let url = data.items[2].link;

		if (s != "") {
			if (s.length > 140) {
				//文字数制限
				alert("テキストが140字を超えています");
			} else {
				//投稿画面を開くls
				url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
				window.open(url,"_blank","width=600,height=300");
			}
		}
    }

	for (let i = 0; i < 10; i++) {
		// 値が 0 から 4 まで計 5 回実行される
		// console.log('一歩西に歩く');
		// console.log(data.items[i].title);
		// console.log(data.items[i].link);
		document.getElementById("rss-feed").innerHTML
		 +="<li><h2>"+(data.items[i].title)+"</h2><hr>"+
		   "<p><a href="+(data.items[i].link)+">"+(data.items[i].link)+"</a></p></li><br>";
		   twitText();
		}
	// document.getElementById("rss-btn").innerHTML = "クリックされた！";
	// // rss feed の内容が json として表示される
}

