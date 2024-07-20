import React from 'react'
import SectionTitle from '../SectionTitle'
import BlogCard from './BlogCard'
import { blogs } from '../../Constants'

const BlogsSection = () => {
  return (
    <div className='container mt-44'>
      <SectionTitle title="Our Blogs" description="Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog." />
<div className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
  {blogs.map((blog, index) => (
    <BlogCard key={index}  {...blog} />
  ))}
</div>
    </div>
  )
}

export default BlogsSection