module.exports = {
  apps: [{
    name: 'gazooAPI',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'http://ec2-18-188-72-17.us-east-2.compute.amazonaws.com/',
      key: '~/.ssh/tutorialkeypair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:louboarman/gazooAPIRepo.git',
      path: '/home/ubuntu/GazooAPIRepo',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}