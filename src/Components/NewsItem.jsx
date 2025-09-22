
 

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card h-100">
      <img
        src={src ? src : "https://via.placeholder.com/300x200"}
        className="card-img-top"
        alt={title || "news image"}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description : "No description available."}</p>
        <a
          href={url}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;



// const NewsItem = ({ title, description, src, url }) => {
//   return (
//     <div className="card h-100">
//       <img
//         src={src ? src : "https://via.placeholder.com/300x150.png?text=No+Image"}
//         className="card-img-top"
//         alt="news"
//       />
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{title ? title.slice(0, 60) : "No Title"}</h5>
//         <p className="card-text">{description ? description.slice(0, 100) : "No description available"}</p>
//         <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;


