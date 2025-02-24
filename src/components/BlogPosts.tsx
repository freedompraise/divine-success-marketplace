
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogPosts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-ds-primary mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${index}`}>
              <Button className="w-full bg-ds-accent hover:bg-ds-primary flex items-center justify-center gap-2">
                Read More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;
