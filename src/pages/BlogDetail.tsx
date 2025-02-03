import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post, index) => index === Number(id));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  const handleServiceInquiry = (service: string) => {
    const message = `Hello, I read your blog post about ${service} and I'm interested in learning more about your services.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348100481947?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-ds-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
            <h1 className="text-4xl font-bold text-ds-primary mb-4">
              {blogPost.title}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">{blogPost.content}</p>
              
              <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
                <h2 className="text-2xl font-bold text-ds-primary mb-4">
                  Want to Learn More?
                </h2>
                <p className="text-gray-600 mb-4">
                  Our expert team is ready to help you with all your {blogPost.service} needs.
                  Contact us today for professional consultation and services.
                </p>
                <Button
                  onClick={() => handleServiceInquiry(blogPost.service)}
                  className="w-full bg-ds-accent hover:bg-ds-primary flex items-center justify-center gap-2"
                >
                  Inquire About {blogPost.service}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogDetail;