import fakes from '../fakes'

const handleName = name => {
  if (name.match(/first/i)) return fakes.firstName()
  if (name.match(/last/i)) return fakes.lastName()
  return `${fakes.firstName()} ${fakes.lastName()}`
}

export default handleName
