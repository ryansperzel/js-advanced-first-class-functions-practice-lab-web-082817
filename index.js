// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function (one, two) {
    return one.name.localeCompare(two.name)
  })
}

// function totalRevenue(drivers) {
//   return drivers.reduce((total, amount) => total + amount), 0) {
//     return total += driver.revenue
//   }
// }

function totalRevenue (drivers) {
  return drivers.reduce(function (total, driver, index) {
  total += driver.revenue
  return total
  }, 0)
  return total
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length
}
