import app from './app';
import { env } from './config/env.config';

const PORT = env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${env.NODE_ENV} mode on port ${PORT}`);
});
