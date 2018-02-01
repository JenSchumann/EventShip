console.log('Will this event become a reality?');
// console.log('Reset my meetup API key to have a true .env file');

const app = angular.module('EventShip', []);

app.controller('EventController', function(){
  this.opp = 'show on the road!';
});
