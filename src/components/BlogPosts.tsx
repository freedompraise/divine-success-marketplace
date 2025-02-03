import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const blogPosts = [
  {
    title: "Essential Vaccinations for Your Pets",
    excerpt: "Learn about the core vaccinations that every pet needs and when to get them.",
    content: "Vaccinations are crucial for protecting your pets against various diseases. Core vaccines for dogs include...",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def",
    service: "Pet Health Care"
  },
  {
    title: "Maintaining Healthy Poultry: A Complete Guide",
    excerpt: "Discover best practices for keeping your poultry healthy and productive.",
    content: "Proper poultry management involves several key aspects including nutrition, housing, and disease prevention...",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7",
    service: "Poultry Health Care"
  },
  {
    title: "Fish Farming: Tips for Success",
    excerpt: "Expert advice on maintaining a healthy fish farm environment.",
    content: "Successful fish farming requires careful attention to water quality, feeding schedules, and disease management...",
    image: "https://images.unsplash.com/photo-1544731894-2d10b4c8c1bf",
    service: "Fish Health Care"
  },
  {
    title: "Understanding Cattle Health",
    excerpt: "Essential guide to maintaining healthy cattle and preventing common diseases.",
    content: "Cattle health management involves regular health checks, proper nutrition, and preventive care...",
    image: "https://images.unsplash.com/photo-1597432480320-8f0a8ff1f3cc",
    service: "Ruminate Health Care"
  },
  {
    title: "Rabbit Care 101",
    excerpt: "Everything you need to know about proper rabbit care and maintenance.",
    content: "Proper rabbit care involves appropriate housing, nutrition, and regular health monitoring...",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308",
    service: "Rabbitry Health Care"
  },
  {
    title: "Snail Farming Guide",
    excerpt: "Complete guide to successful snail farming and healthcare.",
    content: "Successful snail farming requires proper environmental conditions, feeding, and disease prevention...",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667",
    service: "Snailry Health Care"
  },
  {
    title: "Choosing the Right Animal Medications",
    excerpt: "Guide to understanding and selecting appropriate medications for your animals.",
    content: "Proper medication selection and administration is crucial for animal health...",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    service: "Animal Drugs"
  },
  {
    title: "Day-Old Chicks Care Guide",
    excerpt: "Essential care tips for day-old chicks and proper brooding practices.",
    content: "Proper care of day-old chicks involves maintaining appropriate temperature, nutrition, and housing...",
    image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8",
    service: "Day-old Birds"
  },
  {
    title: "Safe Pest Control in Agriculture",
    excerpt: "Understanding safe and effective pest control methods in agriculture.",
    content: "Effective pest control involves integrated pest management strategies and proper chemical application...",
    image: "https://images.unsplash.com/photo-1589483232748-515c025575bc",
    service: "Agro-chemical Services"
  },
  {
    title: "Pet Nutrition Guide",
    excerpt: "Complete guide to proper pet nutrition and dietary requirements.",
    content: "Proper pet nutrition is essential for maintaining good health and preventing diseases...",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
    service: "Pet Health Care"
  }
];

const BlogPosts = () => {
  const handleServiceInquiry = (service: string) => {
    const message = `Hello, I read your blog post about ${service} and I'm interested in learning more about your services.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348100481947?text=${encodedMessage}`, "_blank");
  };

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
            <p className="text-gray-800 mb-6">{post.content.substring(0, 150)}...</p>
            <Button
              onClick={() => handleServiceInquiry(post.service)}
              className="w-full bg-ds-accent hover:bg-ds-primary flex items-center justify-center gap-2"
            >
              Learn More About {post.service}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogPosts;