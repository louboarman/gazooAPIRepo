module.exports = {
  apps: [{
    name: 'gazooAPI',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-219-31-173.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutorialkeypair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:louboarman/gazooAPIRepo.git',
      path: '/home/ubuntu/GazooAPIRepo/app.js',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
