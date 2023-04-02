import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
    return (
        <nav className='navbar px-8 mb-12 shadow-lg bg-neutral'>
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-2 mr-1 text-3xl' />
                    <Link to='/' className='text-lg font-bold align-middle'>
                        {title}
                    </Link>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
                            Home
                        </Link>
                        <Link to='/about' className='btn mx-2 btn-ghost btn-sm rounded-btn'>
                            About
                        </Link>
                        <Link to='/contact' className='btn btn-ghost btn-sm rounded-btn'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'GitFind',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar