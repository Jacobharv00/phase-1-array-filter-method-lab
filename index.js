const findMatching = ( drivers, name ) => {
  const filtered = drivers.filter( driver => driver.toLowerCase() === name.toLowerCase() )
  return filtered
}

const fuzzyMatch = ( drivers, name ) => {
  const filtered = drivers.filter( driver => driver.toLowerCase().indexOf( name.toLowerCase() ) === 0 )
  return filtered
}

const matchName = ( drivers, name ) => {
  const filtered = drivers.filter( driver => driver.name === name )
  return filtered
}
