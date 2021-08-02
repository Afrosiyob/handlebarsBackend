const { Sequelize } = require( 'sequelize' );

// Passing parameters separately (other dialects)
const sequelizeDB = new Sequelize( 'handlebars', 'postgres', '2230102ab', {
    host: 'localhost',
    dialect: 'postgres'
} );

const connectDB = async () => {
    try {
        await sequelizeDB.authenticate();
        console.log( "Connection has been established successfully. 😄 🥳" );
        await sequelizeDB.sync( { alter: true } );
        console.log( "All models were synchronized successfully. 🎊 🎉" );
    } catch ( error ) {
        console.error( "Unable to connect to the database:", error );
        process.exit( 1 );
    }
}

module.exports = {
    sequelizeDB,
    connectDB
}