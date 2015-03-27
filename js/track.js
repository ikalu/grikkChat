var queue = new Queue();
var url = document.URL;
var ran = document.getElementById('hi');
ran.html = 'boo';
var i = 0;
if(queue.length == 0)
	queue.push(url);
while(queue.length >=1){
	if(queue[i]) == url)
		alert("Same page!");
	queue.push(url);
}
