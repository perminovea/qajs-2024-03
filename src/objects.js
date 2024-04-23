const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  greet(name) {
    console.log('hello', name)
  },
  'first name': 'Damir',
}

console.log('user 1', user)
delete user.greet
delete user['first name']
console.log('user 2', user)

if ('id' in user) {
  console.log('user has id')
}

if (!('greet' in user)) {
  console.log('user doestn have greet')
}
