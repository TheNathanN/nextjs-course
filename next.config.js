const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'nathan',
        mongodb_password: '151643Na',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'nathan',
      mongodb_password: '151643Na',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'production-site',
    },
  };
};
