import { Link } from "react-router-dom";
const Elctronics = () => {
  const items = [
    { name: "sagar", img: "assets/img/w2.webp" },
    { name: "sagar2", img: "assets/img/a2.webp" },
    { name: "sagar3", img: "assets/img/a3.webp" },
    { name: "sagar4", img: "assets/img/e1.webp" },
  ];

  return (
    <Link to="/subCategories"><div className="emaincard">
      <h1 className="section-title">Best Of Electronics</h1>
      <div className="container">
        <div className="row justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="econtainercard">
                <img src={item.img} alt={item.name} />
                <h2>{item.name}</h2>
                <h1>fastrack</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></Link>
  );
};

export default Elctronics;
