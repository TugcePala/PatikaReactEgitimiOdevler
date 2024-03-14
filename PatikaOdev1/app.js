import axios from 'axios';
async function getData(id){
    let userUrl = `https://jsonplaceholder.typicode.com/users/${id}`
    let postUrl= `https://jsonplaceholder.typicode.com/posts?userId=${id}`

    let userInfo;
    let userPostInfo;
    try {
        userInfo = await axios.get(userUrl);
        userPostInfo = await axios.get(postUrl);

       return {userInfo, userPostInfo};
    } catch (error) {
        console.error(error);
    }
}
export default getData;