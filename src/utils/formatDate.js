const formatDate = (postDate) => {
  const year = postDate.slice(0, 4);
  const month = postDate.slice(5, 7);
  const day = postDate.slice(8, 10);
  return `${year}.${month}.${day}`;
};

export default formatDate;
