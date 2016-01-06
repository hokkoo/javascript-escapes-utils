function arrayEach(arr, callback){
    arr = arr || [];
    for(var i = 0, len = arr.length; i < len; i++){
        if(callback(arr[i], i, arr) === false){
            return false;
        }
    }
}
function makeEmpyArray(size, filling){
	return Array.apply(null, Array(size || 4)).map(Number.prototype.valueOf,filling || 0)
}
function markPadding(str, size){
	if(str.length < size){	
		return makeEmpyArray(size - str.length).join('') + str;
	}
}

function char2JsOctal (char, idx) {
	return '\\x' + char.charCodeAt(idx || 0).toString(16);
}
function str2JsOctal(str){
	var t = "";
	arrayEach(str, function(v, i){
		t += char2Hex(str, i)
	});
	return t;
}

function char2JsHex (char, idx) {
	return '\\x' + char.charCodeAt(idx || 0).toString(16);
}
function str2JsHex(str){
	var t = "";
	arrayEach(str, function(v, i){
		t += char2Hex(str, i)
	});
	return t;
}

function char2JsUnicode(char, idx){
	return '\\u' + markPadding(char.charCodeAt(idx || 0).toString(16), 4);
}
function str2UnicodeHex(str){
	var t = "";
	arrayEach(str, function(v, i){
		t += char2JsUnicode(str, i)
	});
	return t;
}
function hex2Char(code){
	return String.fromCharCode(parseInt(code.substr(2), 16));
}
