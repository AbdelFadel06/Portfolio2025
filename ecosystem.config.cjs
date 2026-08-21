module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
