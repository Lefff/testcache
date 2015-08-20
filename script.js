/**
 * Selector Caching Test
 */
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



/**
 * Selector Caching and Appending Test
 */
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



/**
 * $.each vs for
 */
function addElems() {
	var
		body = $('body'),
		str  = '<ul>',
		i;

	for ( i = 0; i < 80; i++ ) {
		str += '<li>This is ' + i + ' element';
	};

	str += '</ul>';

	body.prepend( str );
}

function nativeFor() {
	var
		arr        = $('li'),
		iterations = 100000;

		console.time('Native Loop');
		for(var z = 0; z < iterations; z++ ) {
			var length = arr.length;

			for(var i=0; i < length; i++){
				arr[i];
			}
		}
		console.timeEnd('Native Loop');
}

function jqueryEach() {
	var
		arr        = $('li'),
		iterations = 100000;

	console.time('jQuery Each');
	for(var z = 0; z < iterations; z++ ) {
		arr.each(function(i, val) {
			this;
		});
	}
	console.timeEnd('jQuery Each');
}



/**
 * Form selection
 */
function selectOnlyInputs() {
	$('input').each(function() {
		var
			$this = $( this ),
			type  = this.type;

		if( type === 'checkbox' || type === 'radio' ) {
			$this
				.after( this.type )
				.css({
					'background' : '#000',
					'color'      : '#fff'
				});
		} else {
			$this
				.attr( 'placeholder', this.type )
				.css({
					'background' : '#000',
					'color'      : '#fff'
				});
		}
	})
}
function selectAllInputs( withoutHidden ) {
	var withoutHidden = withoutHidden || false,
		addSelect     = withoutHidden ? ':visible' : '';

	$(':input' + addSelect ).each(function() {
		var
			$this = $( this ),
			type  = this.type;

			console.log( type );

		if( type === 'checkbox' || type === 'radio' ) {
			$this
				.after( this.type )
				.css({
					'background' : '#000',
					'color'      : '#fff'
				});
		} else {
			$this
				.attr( 'placeholder', this.type )
				.css({
					'background' : '#000',
					'color'      : '#fff'
				});
		}
	})
}