import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  },
}

export default function Loading({ speed = 300, text = 'Loading' }) {
  const [content, setContext] = React.useState(text)

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      content === text + '...'
        ? setContext(text)
        : setContext((content) => content + '.')
    }, speed)
    return () => window.clearInterval(interval)
  }, [text, speed])
  return <p style={styles.content}>{content}</p>
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
}
