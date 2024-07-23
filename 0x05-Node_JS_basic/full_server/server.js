import express from 'express';
import mapRoutes from './routes';

const app = express();
const PORT = 1245;

mapRoutes(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

    export default app;
    modules.export = app