const authPageController = async ( req, res ) => {
    res.render( "auth", {
        title: "auth page"
    } )
}

module.exports = {
    authPageController
}