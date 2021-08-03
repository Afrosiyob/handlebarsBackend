const express = require( "express" )
const config = require( "config" )
const { connectDB } = require( "../connection/connectionPostgres" )
const exphbs = require( 'express-handlebars' );
const { authRouter } = require( "../src/routes/main.routes" );

// set app server
const app = express()

// setup handlebars
const hbs = exphbs.create( {
    defaultLayout: 'main',
    extname: 'hbs'
} )

app.engine( 'hbs', hbs.engine );
app.set( 'view engine', 'hbs' );
app.set( 'views', 'views' );


// all routes
app.use( authRouter )



// set PORT
const PORT = process.env.PORT || config.get( "PORT" ) || 5000

// run server
app.listen( PORT, async () =>
    await connectDB().then( () => {
        console.log( `Server is runnig on ${ PORT } 😎 ` )
    } ).catch( ( error ) => {
        console.log( error );
    } )
)