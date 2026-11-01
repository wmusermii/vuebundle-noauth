module.exports = {
  apps: [
    {
      name: 'vuebundle-noauth',
      script: 'dist/server/index.js',
      instances: 1,
      exec_mode: 'fork',
      env: { NODE_ENV: 'production' },
    },
  ],
}
