import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8000/api/blogs/slug/${slug}`);
      const data = await response.json();
      
      if (data.success) {
        setBlog(data.data);
        // Update page title
        document.title = `${data.data.title} - Timeless Aesthetics Blog`;
      } else {
        setError('Blog not found');
      }
    } catch (error) {
      setError('Error connecting to server');
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  if (loading) {
    return (
      <div className='w-[100%] overflow-hidden'>
        <Nav />
        <div className='min-h-screen bg-gray-50 flex justify-center items-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className='w-[100%] overflow-hidden'>
        <Nav />
        <div className='min-h-screen bg-gray-50 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Blog Not Found</h1>
          <p className='text-lg text-gray-600 mb-8'>{error || 'The blog post you are looking for does not exist.'}</p>
          <Link 
            to='/blogs'
            className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
          >
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='w-[100%] overflow-hidden'>
      <Nav />
      
      <article className='min-h-screen bg-white'>
        {/* Header Image */}
        {blog.thumbnail && (
          <div className='w-full h-64 md:h-96 overflow-hidden'>
            <img 
              src={blog.thumbnail} 
              alt={blog.title}
              className='w-full h-full object-cover'
            />
          </div>
        )}

        <div className='max-w-4xl mx-auto px-4 py-12 md:py-16'>
          {/* Blog Header */}
          <header className='mb-8'>
            <div className='flex items-center justify-between mb-4'>
              <span className='text-sm text-gray-500'>
                {formatDate(blog.createdAt)}
              </span>
              <span className='text-sm text-blue-600 font-medium'>
                {blog.author}
              </span>
            </div>
            
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight'>
              {blog.title}
            </h1>
            
            {blog.metaDescription && (
              <p className='text-xl text-gray-600 leading-relaxed'>
                {blog.metaDescription}
              </p>
            )}
          </header>

          {/* Blog Content */}
          <div className='prose prose-lg max-w-none'>
            <div 
              dangerouslySetInnerHTML={createMarkup(blog.content)}
              className='blog-content'
              style={{
                lineHeight: '1.8',
                color: '#374151'
              }}
            />
          </div>

          {/* Blog Footer */}
          <footer className='mt-12 pt-8 border-t border-gray-200'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <div className='mb-4 md:mb-0'>
                <p className='text-sm text-gray-600'>
                  Published by <span className='font-medium'>{blog.author}</span>
                </p>
                <p className='text-sm text-gray-500'>
                  {formatDate(blog.createdAt)}
                </p>
              </div>
              
              <Link 
                to='/blogs'
                className='inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors'
              >
                <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                </svg>
                Back to Blogs
              </Link>
            </div>
          </footer>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
