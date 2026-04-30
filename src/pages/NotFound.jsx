import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NotFound = () => {
    const location = useLocation();

    return (
        <div className="terminal-section not-found">
            <pre className="not-found-art">{`
 ___  ___  ___
|_  ||_  ||_  |
  | |  | |  | |
  | |  | |  | |
 _| |__| |__| |_
|_______________|

`}</pre>
            <p className="not-found-line"><span className="not-found-prompt">$</span> cd {location.pathname}</p>
            <p className="not-found-line not-found-error">bash: cd: {location.pathname}: No such file or directory</p>
            <p className="not-found-line"><span className="not-found-prompt">$</span> <Link to="/">cd ~</Link></p>
        </div>
    )
}

export default NotFound
