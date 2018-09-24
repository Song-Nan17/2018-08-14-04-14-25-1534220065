module.exports = function main(str) {

   var x = '';
   var y = ''; 
   var z = '';
   for (i = 0;i < str.length;i++) {
	   if (str[i] == '0') {
		   x = x +'._. ';
		   y = y +'|.| ';
		   z = z +'|_| ';
	   } else if (str[i] === '1') {
		   x = x +'... ';
		   y = y +'..| ';
		   z = z +'..| ';
	   } else if (str[i] === '2') {
		   x = x +'._. ';
		   y = y +'._| ';
		   z = z +'|_. ';		   
	   } else if (str[i] === '3') {
		   x = x +'._. ';
		   y = y +'._| ';
		   z = z +'._| ';
	   } else if (str[i] === '4') {
		   x = x +'... ';
		   y = y +'|_| ';
		   z = z +'..| ';
	   } else if (str[i] === '5') {
		   x = x +'._. ';
		   y = y +'|_. ';
		   z = z +'._| ';
	   } else if (str[i] === '6') {
		   x = x +'._. ';
		   y = y +'|_. ';
		   z = z +'|_| ';
	   } else if (str[i] === '7') {
		   x = x +'._. ';
		   y = y +'..| ';
		   z = z +'..| ';
	   } else if (str[i] === '8') {
		   x = x +'._. ';
		   y = y +'|_| ';
		   z = z +'|_| ';
	   } else if (str[i] === '9') {
		   x = x +'._. ';
		   y = y +'|_| ';
		   z = z +'..| ';
	   } 
   }
    x = x.substr(0,x.length-1);
	x = x +'\n';
	y = y.substr(0,y.length-1);
    y = y +'\n';
	z = z.substr(0,z.length-1);
    z = z +'\n';	

	return x+y+z;

};