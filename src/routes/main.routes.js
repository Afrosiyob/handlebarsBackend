const { Router } = require( "express" )
const { authPageController } = require( "../controllers/authPageController" )

const router = Router()

router.get( "/auth", authPageController )


module.exports = {
    authRouter: router
}