// Caching
function withoutCache( iterations ) {
	var
		i          = 0,
		iterations = iterations || 1000;

	console.time('checkTest');

	for( i = 0; i < iterations; i++ ) {
		$('html').hasClass('red') ?
			$('html').removeClass('red').addClass('green') :
			$('html').removeClass('green').addClass('red');
	}

	console.timeEnd('checkTest');
}

function withCache() {
	var
		i          = 0,
		iterations = iterations || 1000,
		elem       = $('html');

	console.time('checkTest');

	for( i = 0; i < iterations; i++ ) {
		elem.hasClass('red') ?
			elem.removeClass('red').addClass('green') :
			elem.removeClass('green').addClass('red');
	}

	console.timeEnd('checkTest');
}



// Appending and caching
function withoutCacheAppend( iterations ) {
	var
		i          = 0,
		iterations = iterations || 1000;

	console.time('checkTest');

	for( i = 0; i < iterations; i++ ) {
		$('html').hasClass('red') ?
			$('html').removeClass('red').addClass('green') :
			$('html').removeClass('green').addClass('red');

		$('html body')
					.prepend( $('<div />', { class : 'withoutCache' } ).text('Hello not optimized friends') );
	}

	console.timeEnd('checkTest');
}

function withCacheAppend() {
	var
		i          = 0,
		iterations = iterations || 1000,
		html       = $('html'),
		body       = html.find('body'),
		addingBl   = $('<div />', { class : 'withCache' } ).text('Hello optimized friends');

	console.time('checkTest');

	for( i = 0; i < iterations; i++ ) {
		html.hasClass('red') ?
			html.removeClass('red').addClass('green') :
			html.removeClass('green').addClass('red');

		body.prepend( addingBl );
	}

	console.timeEnd('checkTest');
}

function withCacheAppendMore() {
	var
		i          = 0,
		iterations = iterations || 1000,
		html       = $('html'),
		body       = html.find('body'),
		addingBl   = '<div class="withCache">Hello optimized friends</div>',
		buffer     = '';

	console.time('checkTest');

	for( i = 0; i < iterations; i++ ) {
		buffer += addingBl;
	}

	for( i = 0; i < iterations; i++ ) {
		html.hasClass('red') ?
			html.removeClass('red').addClass('green') :
			html.removeClass('green').addClass('red');
	}

	body.prepend( buffer );

	console.timeEnd('checkTest');
}