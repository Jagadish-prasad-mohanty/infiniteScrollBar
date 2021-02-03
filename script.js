const container=document.querySelector(".container");

let limit=4;
let pageCount=1;
let postCount=1;

const getPost = async() => {
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}$_page=${pageCount}`);
    const data= await response.json();
    // console.log(data[0]);
    data.map((curElem,index) => {
        const myContent=`
        <div class="content">
            <p class="postId">${postCount++}</p>
            <h3 class="postTitle">${curElem.title.replace(/\b\w/g, l => l.toUpperCase())}</h3>
            <p class="postContent">${curElem.body}</p>
        </div>
    
        `
        container.insertAdjacentHTML("beforeend",myContent)
    })
}

getPost();

const showData = () =>{
    setTimeout(() => {
        pageCount++;
        getPost();
    }, 100);
}

window.addEventListener('scroll',()=>{
    const {scrollHeight,clientHeight,scrollTop}=document.documentElement;
    if((scrollTop+clientHeight)>=scrollHeight){
        showData();
    }
});