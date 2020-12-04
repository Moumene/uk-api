import app from './config/app';
import env from './environment'

const PORT = env.getPort();
const API_KEY = env.getFixerApiKey();

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
