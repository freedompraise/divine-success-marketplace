import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPosts from "@/components/BlogPosts";
import WhatsAppButton from "@/components/WhatsAppButton";

const Blog = () => {
  return (
    <div className="min-h-screen bg-ds-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-ds-primary text-center mb-12">
            Veterinary & Agriculture Blog
          </h1>
          <BlogPosts />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;