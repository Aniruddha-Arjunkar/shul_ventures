function ServiceCard({ image, title, description }) {
  return (
    <article className="service-card">
      <div className="service-card-image">
        <img src={image} alt={title} />
      </div>

      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ServiceCard;