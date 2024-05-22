import express from 'express';
import routes from './routes/router.js';
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

