// Code your solution here
function findMatching(drivers, driverString) {
  let matched = drivers.filter(n => {
    return n.match(new RegExp(driverString, 'i'));
  });
  return matched;
}
