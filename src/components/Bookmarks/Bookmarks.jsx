import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 h-full shadow-2xl ml-5 mt-5 rounded-md">
            <div>
                <h3 className="text-2xl text-center m-3 text-purple-500 font-bold rounded-md bg-slate-200 p-5 shadow-lg">Spent time on read: {readingTime} min</h3>
            </div>
            <h2 className="text-3xl text-center pt-8 pb-2">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark} 
                    ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;