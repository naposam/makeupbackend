import bodyPaser from 'body-parser'
import morgan from 'morgan'



export default app =>{
    app.use(bodyPaser.json())
    app.use(bodyPaser.urlencoded({ extended: false}))
    app.use(morgan('dev'))
}