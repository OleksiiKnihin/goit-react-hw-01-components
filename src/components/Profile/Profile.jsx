import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ avatar, tag, username, location, stats }) => {
    return (
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={tag}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
    avatar: PropTypes.string,
    tag: PropTypes.string,
    username: PropTypes.string.isRequired,
    location: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    })
}