import Api from '@/services/Api'

export default{
  register (credentials) {
    console.log('register called')
    console.log(credentials)
    return Api().post('/register', credentials)
  }
}
// AuthenticationService.register({
//     email:"abc@gmail.com",
//     password:"abc@123"
// })
