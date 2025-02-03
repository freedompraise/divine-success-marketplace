import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Essential Vaccinations for Your Pets",
    excerpt: "Learn about the core vaccinations that every pet needs and when to get them.",
    content: "Vaccinations are crucial for protecting your pets against various diseases. Core vaccines for dogs include Rabies, Distemper, Parvovirus, and Adenovirus. For cats, essential vaccines include Rabies, Feline Viral Rhinotracheitis, Calicivirus, and Panleukopenia. Regular vaccination schedules should start when pets are young and continue throughout their lives. Early vaccination helps build immunity and prevents serious diseases. Our veterinary team can create a customized vaccination schedule based on your pet's age, lifestyle, and risk factors. We also provide vaccination certificates and reminders for booster shots to ensure your pet stays protected.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def",
    service: "Pet Health Care"
  },
  {
    title: "Maintaining Healthy Poultry: A Complete Guide",
    excerpt: "Discover best practices for keeping your poultry healthy and productive.",
    content: "Proper poultry management involves several key aspects including nutrition, housing, and disease prevention. A balanced diet with appropriate protein levels, vitamins, and minerals is essential for optimal growth and egg production. Housing should provide adequate space, ventilation, and protection from predators and extreme weather. Regular health monitoring, including checking for common diseases like Newcastle disease and Infectious Bronchitis, is crucial. Biosecurity measures, such as limiting visitor access and maintaining clean environments, help prevent disease spread. Our team provides comprehensive poultry health services, including vaccination programs and regular health checks.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7",
    service: "Poultry Health Care"
  },
  {
    title: "Fish Farming: Tips for Success",
    excerpt: "Expert advice on maintaining a healthy fish farm environment.",
    content: "Successful fish farming requires careful attention to water quality, feeding schedules, and disease management. Water parameters like pH, ammonia levels, and dissolved oxygen must be monitored regularly. Proper stocking density and feeding practices prevent stress and promote healthy growth. Common diseases in fish farms can be prevented through good management practices and early detection. Our aquaculture experts provide comprehensive services including water quality testing, disease diagnosis, and treatment recommendations. We also offer consultation on farm setup and management practices.",
    image: "https://images.unsplash.com/photo-1544731894-2d10b4c8c1bf",
    service: "Fish Health Care"
  },
  {
    title: "Understanding Cattle Health",
    excerpt: "Essential guide to maintaining healthy cattle and preventing common diseases.",
    content: "Cattle health management involves regular health checks, proper nutrition, and preventive care. A balanced diet with appropriate roughage and concentrates is essential for optimal growth and milk production. Regular vaccination against diseases like Foot and Mouth Disease, Brucellosis, and Black Quarter is crucial. Parasite control through regular deworming helps maintain health and productivity. Our veterinary team provides comprehensive cattle health services including vaccination, deworming, pregnancy diagnosis, and treatment of various conditions.",
    image: "https://images.unsplash.com/photo-1597432480320-8f0a8ff1f3cc",
    service: "Ruminate Health Care"
  },
  {
    title: "Rabbit Care 101",
    excerpt: "Everything you need to know about proper rabbit care and maintenance.",
    content: "Proper rabbit care involves appropriate housing, nutrition, and regular health monitoring. Rabbits need spacious hutches with separate areas for eating, sleeping, and exercise. A diet rich in hay, fresh vegetables, and limited pellets ensures good health. Regular grooming and nail trimming prevent common problems. Health issues like dental problems and digestive issues can be prevented through proper diet and care. Our veterinary services include health checks, vaccinations, and treatment of common rabbit ailments.",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308",
    service: "Rabbitry Health Care"
  },
  {
    title: "Snail Farming Guide",
    excerpt: "Complete guide to successful snail farming and healthcare.",
    content: "Successful snail farming requires proper environmental conditions, feeding, and disease prevention. Snails need a humid environment with appropriate soil conditions for burrowing and egg laying. A diet of fresh vegetables and calcium supplements promotes healthy shell development. Common problems include parasites and shell damage, which can be prevented through good management practices. Our experts provide guidance on farm setup, feeding programs, and health management.",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667",
    service: "Snailry Health Care"
  },
  {
    title: "Choosing the Right Animal Medications",
    excerpt: "Guide to understanding and selecting appropriate medications for your animals.",
    content: "Proper medication selection and administration is crucial for animal health. Different species require specific medications and dosages. Antibiotics should only be used when necessary and under veterinary guidance. Storage conditions and expiration dates must be monitored. Our pharmacy provides quality medications with proper guidance on usage and administration. We also offer consultation on drug interactions and side effects.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    service: "Animal Drugs"
  },
  {
    title: "Day-Old Chicks Care Guide",
    excerpt: "Essential care tips for day-old chicks and proper brooding practices.",
    content: "Proper care of day-old chicks involves maintaining appropriate temperature, nutrition, and housing. Brooding temperature should start at 95°F and gradually decrease. Clean water and starter feed must be available at all times. Proper lighting and ventilation are crucial for healthy development. Our services include supply of quality day-old chicks and guidance on proper brooding practices. We also provide vaccination services and health monitoring.",
    image: "https://images.unsplash.com/photo-1569396116180-210c182bedb8",
    service: "Day-old Birds"
  },
  {
    title: "Safe Pest Control in Agriculture",
    excerpt: "Understanding safe and effective pest control methods in agriculture.",
    content: "Effective pest control involves integrated pest management strategies and proper chemical application. Different crops and situations require specific approaches to pest control. Safety measures during application protect both the applicator and the environment. Our services include pest identification, control recommendations, and safe application of pesticides. We also provide training on proper handling and application techniques.",
    image: "https://images.unsplash.com/photo-1589483232748-515c025575bc",
    service: "Agro-chemical Services"
  },
  {
    title: "Pet Nutrition Guide",
    excerpt: "Complete guide to proper pet nutrition and dietary requirements.",
    content: "Proper pet nutrition is essential for maintaining good health and preventing diseases. Different life stages require specific nutritional needs. Quality commercial foods provide balanced nutrition, while homemade diets need careful planning. Special conditions may require dietary modifications. Our veterinary team provides nutritional counseling and diet recommendations for all types of pets. We also stock quality pet foods and supplements.",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
    service: "Pet Health Care"
  }
];

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