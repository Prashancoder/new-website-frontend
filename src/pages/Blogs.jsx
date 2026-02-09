import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/api/blogs?page=${page}&limit=6`);
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.data);
        setTotalPages(data.pagination.pages);
      } else {
        setError('Failed to fetch blogs');
      }
    } catch (error) {
      setError('Error connecting to server');
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const truncateContent = (content, maxLength = 150) => {
    if (!content) return '';
    const plainText = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    return plainText.length > maxLength ? plainText.substring(0, maxLength) + '...' : plainText;
  };

  return (
    <div className='w-[100%] overflow-hidden'>
      <Nav />
      
      <div className='min-h-screen bg-gray-50 py-26 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
              Our Blog
            </h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Stay updated with the latest trends, tips, and insights in aesthetics and beauty
            </p>
          </div>

          {loading ? (
            <div className='flex justify-center items-center py-20'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
            </div>
          ) : error ? (
            <div className='text-center py-20'>
              <p className='text-red-600 text-lg'>{error}</p>
              <button 
                onClick={fetchBlogs}
                className='mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
              >
                Try Again
              </button>
            </div>
          ) : blogs.length === 0 ? (
            <div className='text-center py-20'>
              <p className='text-gray-600 text-lg'>No blogs found</p>
            </div>
          ) : (
            <>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {blogs.map((blog) => (
                  <article key={blog._id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
                    {blog.thumbnail && (
                      <img 
                        src={blog.thumbnail} 
                        alt={blog.title}
                        className='w-full h-48 object-cover'
                      />
                    )}
                    <div className='p-6'>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='text-sm text-gray-500'>
                          {formatDate(blog.createdAt)}
                        </span>
                        <span className='text-sm text-blue-600 font-medium'>
                          {blog.author}
                        </span>
                      </div>
                      
                      <h2 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2'>
                        <Link 
                          to={`/blogs/${blog.slug}`}
                          className='hover:text-blue-600 transition-colors'
                        >
                          {blog.title}
                        </Link>
                      </h2>
                      
                      <p className='text-gray-600 mb-4 line-clamp-3'>
                        {blog.metaDescription || truncateContent(blog.content)}
                      </p>
                      
                      <Link 
                        to={`/blogs/${blog.slug}`}
                        className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors'
                      >
                        Read More
                        <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className='flex justify-center items-center mt-12 space-x-4'>
                  <button
                    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className='px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                  >
                    Previous
                  </button>
                  
                  <span className='text-gray-600'>
                    Page {page} of {totalPages}
                  </span>
                  
                  <button
                    onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className='px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blogs;
