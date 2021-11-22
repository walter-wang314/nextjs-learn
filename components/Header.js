import HeaderStyles from '../styles/Header.module.css'

function Nav() {
  return (
    <div>
      <h1 className={HeaderStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={HeaderStyles.description}>
        Thats what happened to me one spring morning not long after Id arrived
        at my office. I own a small agency that handles speaking engagements and
        literary rights for Christian entertainers, authors and leaders. I
        started the business in my 20s and it grew to about a dozen employees,
        earning me enough to provide a comfortable living for my family and to
        send my kids to college.
      </p>
    </div>
  )
}

export default Nav
