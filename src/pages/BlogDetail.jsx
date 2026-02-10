import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// const serverUrl = "https://new-website-backend-2.onrender.com"
const serverUrl = "https://new-website-backend-2.onrender.com"

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const THEME_COLOR = "#D4AF37"; // Gold Theme

  useEffect(() => {
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${serverUrl}/api/blogs/slug/${slug}`);
      const data = await response.json();
      
      if (data.success) {
        setBlog(data.data);
        document.title = `${data.data.title} | Timeless Aesthetics`;
      } else {
        setError('Blog post not found');
      }
    } catch (error) {
      setError('Connection failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className='w-full'>
        <Nav />
        <div className='min-h-screen flex flex-col justify-center items-center bg-white'>
          <div className='w-12 h-12 border-4 border-gray-100 border-t-[#D4AF37] rounded-full animate-spin'></div>
          <p className='mt-4 text-xs font-bold uppercase tracking-widest text-gray-400'>Loading Story</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className='w-full'>
        <Nav />
        <div className='min-h-[70vh] flex flex-col justify-center items-center px-4'>
          <h1 className='text-6xl font-serif text-gray-200 mb-4'>404</h1>
          <p className='text-gray-500 mb-8'>{error || 'Content missing'}</p>
          <Link to='/blogs' className='px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all'>
            Explore Other Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className='w-full bg-white'>
      <Nav />
      
      <article className='pt-24 pb-20'>
        {/* Header Section */}
        <header className='max-w-4xl mx-auto px-4 text-center mb-12'>
          <div className='flex items-center justify-center space-x-3 mb-6'>
            <span className='h-[1px] w-8 bg-[#D4AF37]'></span>
            <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]'>
              {blog.author} • {formatDate(blog.createdAt)}
            </span>
            <span className='h-[1px] w-8 bg-[#D4AF37]'></span>
          </div>
          
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-[1.15]'>
            {blog.title}
          </h1>

          {blog.metaDescription && (
            <p className='text-lg md:text-xl text-gray-500 font-light italic leading-relaxed max-w-3xl mx-auto'>
              "{blog.metaDescription}"
            </p>
          )}
        </header>

        {/* Feature Image */}
        {blog.thumbnail && (
          <div className='max-w-6xl mx-auto px-4 mb-16'>
            <div className='aspect-video overflow-hidden rounded-sm shadow-2xl'>
              <img 
                src={blog.thumbnail} 
                alt={blog.title}
                className='w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000'
              />
            </div>
          </div>
        )}

        {/* Article Body */}
        <div className='max-w-3xl mx-auto px-6'>
          <style>{`
            .blog-content h2 { font-size: 2rem; font-weight: 700; color: #111; margin-top: 2.5rem; margin-bottom: 1.2rem; font-family: serif; border-left: 4px solid #D4AF37; padding-left: 1rem; }
            .blog-content h3 { font-size: 1.5rem; font-weight: 600; color: #333; margin-top: 2rem; margin-bottom: 1rem; }
            .blog-content p { font-size: 1.125rem; line-height: 1.9; color: #4b5563; margin-bottom: 1.5rem; font-weight: 300; }
            .blog-content ul { margin-bottom: 1.5rem; padding-left: 1.5rem; list-style-type: disc; color: #D4AF37; }
            .blog-content ul li { color: #4b5563; margin-bottom: 0.5rem; }
            .blog-content strong { color: #111; font-weight: 600; }
          `}</style>

          <div 
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className='blog-content'
          />

          {/* Share / Footer */}
          <div className='mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
            <div className='flex items-center space-x-4'>
               <div className='w-12 h-12 bg-gray-900 flex items-center justify-center text-[#D4AF37] font-serif text-xl rounded-full'>
                 {blog.author.charAt(0)}
               </div>
               <div>
                 <p className='text-[10px] uppercase tracking-widest text-gray-400 font-bold'>Written by</p>
                 <p className='text-sm font-bold text-gray-900'>{blog.author}</p>
               </div>
            </div>

            <Link 
              to='/blogs'
              className='flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-900 border-b-2 border-[#D4AF37] pb-1 hover:opacity-60 transition-all'
            >
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
              </svg>
              All Articles
            </Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;