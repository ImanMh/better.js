var FunctionAttr2	= FunctionAttr2	|| require('../src/helpers/functionattr2.js')

//////////////////////////////////////////////////////////////////////////////////
//		comment								//
//////////////////////////////////////////////////////////////////////////////////

var cat	= FunctionAttr2(function(name){
	console.log('im a cat called', name)
	return 3
}, {
	arguments	: [String],
	return		: Number,
})

//////////////////////////////////////////////////////////////////////////////////
//		comment								//
//////////////////////////////////////////////////////////////////////////////////

cat('kitty')


