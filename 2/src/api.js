const BASE_URL_API = 'http://localhost/mock-api/'

export const getDashboardData= () => {
    
    let data = fetch(BASE_URL_API + "dashboard.json")
    .then( res => res.json())

}