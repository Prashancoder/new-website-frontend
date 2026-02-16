import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const serverUrl = "https://new-website-backend-2.onrender.com";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return (
      <div className='min-h-screen flex justify-center items-center bg-white'>
        <div className='w-10 h-10 border-2 border-gray-200 border-t-[#D4AF37] rounded-full animate-spin'></div>
      </div>
    );
  }

  return (
    <div className='w-full bg-[#FCFAFA] selection:bg-[#D4AF37]/10'>
      <Nav />
      
      <article className='pt-28 pb-24'>
        {/* Compact Header Area */}
        <header className='max-w-3xl mx-auto px-6 mb-12 text-center'>
          <div className='mb-6 flex items-center justify-center gap-4'>
            <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]'>
              Clinical Journal
            </span>
            <span className='w-1 h-1 bg-gray-300 rounded-full'></span>
            <span className='text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400'>
              {new Date(blog.createdAt).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
            </span>
          </div>
          
          <h1 className='text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-snug mb-6'>
            {blog.title}
          </h1>
          
          <div className='h-[2px] w-12 bg-[#D4AF37] mx-auto'></div>
        </header>

        {/* Scaled-down Feature Image */}
        {blog.thumbnail && (
          <div className='max-w-4xl mx-auto px-6 mb-16'>
            <div className='relative overflow-hidden rounded-lg shadow-lg group'>
              <img 
                src={blog.thumbnail} 
                alt={blog.title}
                className='w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg'></div>
            </div>
          </div>
        )}

        {/* Content Section with Proper Typography */}
        <div className='max-w-2xl mx-auto px-6'>
          <style>{`
            .blog-content {
              font-family: 'Inter', sans-serif;
              color: #374151;
            }
            .blog-content h2 { 
              font-family: serif; 
              font-size: 1.85rem; 
              color: #111; 
              margin-top: 3rem; 
              margin-bottom: 1rem; 
              font-weight: 600;
              line-height: 1.3;
            }
            .blog-content p { 
              font-size: 1.1rem; 
              line-height: 1.8; 
              margin-bottom: 1.5rem; 
              font-weight: 400;
              color: #4B5563;
              letter-spacing: -0.01em;
            }
            .blog-content strong {
              color: #111;
              font-weight: 600;
            }
            /* Style for the first paragraph to look editorial */
            .blog-content p:first-of-type {
              font-size: 1.25rem;
              color: #1F2937;
              line-height: 1.7;
            }
            .blog-content ul {
              margin: 1.5rem 0;
              padding-left: 1.25rem;
              list-style: none;
            }
            .blog-content li {
              position: relative;
              padding-left: 1.5rem;
              margin-bottom: 0.75rem;
              font-size: 1.05rem;
            }
            .blog-content li::before {
              content: "";
              position: absolute;
              left: 0;
              top: 10px;
              width: 6px;
              height: 6px;
              background-color: #D4AF37;
              border-radius: 50%;
            }
          `}</style>

          <div 
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className='blog-content'
          />

          {/* Minimalist Author Footer */}
          <footer className='mt-20 pt-8 border-t border-gray-100 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 bg-black text-[#D4AF37] flex items-center justify-center rounded-full font-serif text-lg'>
                {blog.author.charAt(0)}
              </div>
              <div className='flex flex-col'>
                <span className='text-[9px] uppercase tracking-widest text-gray-400 font-bold'>Published By</span>
                <span className='text-sm font-semibold text-gray-900'>{blog.author}</span>
              </div>
            </div>

            <Link 
              to='/blogs' 
              className='text-[10px] font-bold uppercase tracking-widest text-gray-900 flex items-center gap-2 group'
            >
              <span className='w-6 h-[1px] bg-[#D4AF37] group-hover:w-10 transition-all'></span>
              All Stories
            </Link>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;