window.onload = function () {
    document.body.classList.add( "loaded_hiding" );
    window.setTimeout( function () {
        document.body.classList.add( "loaded" );
        document.body.classList.remove( "loaded_hiding" );
    }, 500 );
};



const createUserSubmitBtn = document.querySelector( "#createUserSubmitBtn" );
createUserSubmitBtn.addEventListener( "click", function ( e ) {
    e.preventDefault();
    const username = document.querySelector( 'input[name="username"]' ).value;
    const password = document.querySelector( 'input[name="password"]' ).value;
    // POST request using fetch()
    fetch( "/user/create", {
        // Adding method type
        method: "POST",
        // Adding body or contents to send
        body: JSON.stringify( {
            username,
            password
        } ),
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    } )

        // Converting to JSON
        .then( response => response.json() )

        // Displaying results to console
        .then( json => {
            const { errorMessage, data } = json
            if ( errorMessage ) {
                console.log( errorMessage );
                M.toast( { html: errorMessage, classes: 'red' } );
            } else {
                console.log( data );
                M.toast( { html: 'Welcome please login', classes: 'green' } );
            }
        } )

} );