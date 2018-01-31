console.log('Will this event become a reality?');

const app = angular.module('EventShip', []);

app.controller('EventController', function(){
  this.opp = 'show on the road!';
});
