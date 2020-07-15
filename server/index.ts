import nextApp from './next';
import { PORT } from '../env.config';

nextApp()
  .then((server) => {
    server.listen(PORT, () => {
      console.log(`Server ready on http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
  });

