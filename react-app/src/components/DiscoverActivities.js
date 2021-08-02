import activityImages from '../images/activties/';

const DiscoverActivities = () => {
  const activities = [
    {
      title: 'Sports and Activities',
      images: activityImages.sports,
      orientation: '',
    },
    {
      title: 'Wellness and Health',
      images: activityImages.wellness,
      orientation: '',
    },
    {
      title: 'Extreme Sports and Expeditions',
      images: activityImages.extremeSport,
      orientation: '',
    },
    { title: 'Games', images: activityImages.games, orientation: '' },
    {
      title: 'Culture and Education',
      images: activityImages.culture,
      orientation: 'landscape',
    },
    {
      title: 'Enjoyment and Relaxation',
      images: activityImages.enjoyment,
      orientation: 'landscape',
    },
    { title: 'Travelling', images: activityImages.travelling, orientation: '' },
  ];
  return (
    <section className="page-section">
      <section className="page-section__title">
        <h3>Discover holiday activity ideas</h3>
      </section>
      <section className="activities">
        {activities.map((activity, index) => (
          <figure
            className={`activities__item ${activity.orientation}`}
            key={index}
          >
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={activity.images.base}
              />
              <img
                srcSet={`${activity.images.base}, ${activity.images.retina} 2x`}
                src={activity.images.base}
                alt=""
                loading="lazy"
              />
            </picture>
            <figcaption>{activity.title}</figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
};

export default DiscoverActivities;
