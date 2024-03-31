//in this component i written the logic for how many people i want on single page



const paginate = (followers) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(followers.length / itemsPerPage);
  // console.log(pages)

  const newFollowers = Array.from({length : pages},(_,index)=>{
    const start = index * itemsPerPage; 
    return followers.slice(start, start + itemsPerPage );
  })

return newFollowers;

  
}

export default paginate