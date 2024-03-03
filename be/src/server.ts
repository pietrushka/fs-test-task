import app from './app';
import { SERVER_PORT } from './constants';

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
