import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "./models/user.model.js";
import Gig from "./models/gig.model.js";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Connection error:", error);
    process.exit(1);
  }
};

const seedUsers = async () => {
  try {
    // Clear existing users and gigs
    await User.deleteMany({});
    await Gig.deleteMany({});
    console.log("Cleared existing users and gigs");

    const usersData = [
      // Sellers
      {
        username: "Sreeya",
        email: "sreeya@techcruit.com",
        password: "Sreeya123",
        country: "India",
        phone: "+91-555-0101",
        desc: "Creative web designer specializing in modern, responsive websites",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=1",
      },
      {
        username: "Akshitha",
        email: "akshitha@techcruit.com",
        password: "Akshitha123",
        country: "India",
        phone: "+91-555-0102",
        desc: "Expert logo designer creating memorable brand identities",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=2",
      },
      {
        username: "Arjun",
        email: "arjun@techcruit.com",
        password: "Arjun123",
        country: "India",
        phone: "+91-555-0103",
        desc: "Professional music composer creating original soundtracks",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=3",
      },
      {
        username: "Kruthin",
        email: "kruthin@techcruit.com",
        password: "Kruthin123",
        country: "India",
        phone: "+91-555-0104",
        desc: "Full-stack web designer with expertise in modern frameworks",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=4",
      },
      {
        username: "Shresta",
        email: "shresta@techcruit.com",
        password: "Shresta123",
        country: "India",
        phone: "+91-555-0105",
        desc: "Video and animation specialist creating engaging content",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=5",
      },
      {
        username: "Riya",
        email: "riya@techcruit.com",
        password: "Riya123",
        country: "India",
        phone: "+91-555-0106",
        desc: "Professional writer crafting compelling content",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=6",
      },
      {
        username: "Rithika",
        email: "rithika@techcruit.com",
        password: "Rithika123",
        country: "India",
        phone: "+91-555-0107",
        desc: "Creative writer specializing in blog posts and articles",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=7",
      },
      {
        username: "Vineel",
        email: "vineel@techcruit.com",
        password: "Vineel123",
        country: "India",
        phone: "+91-555-0108",
        desc: "Web designer focused on user-centered design",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=8",
      },
      {
        username: "Bindu",
        email: "bindu@techcruit.com",
        password: "Bindu123",
        country: "India",
        phone: "+91-555-0109",
        desc: "Logo designer creating unique brand identities",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=9",
      },
      {
        username: "Vaishu",
        email: "vaishu@techcruit.com",
        password: "Vaishu123",
        country: "India",
        phone: "+91-555-0110",
        desc: "Creative logo designer with attention to detail",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=10",
      },
      {
        username: "Karthik",
        email: "karthik@techcruit.com",
        password: "Karthik123",
        country: "India",
        phone: "+91-555-0111",
        desc: "Music composer creating original compositions",
        isSeller: true,
        img: "https://i.pravatar.cc/150?img=11",
      },
    ];

    // Hash passwords and create users
    const hashedUsers = usersData.map((user) => ({
      ...user,
      password: bcrypt.hashSync(user.password, 5),
    }));

    const createdUsers = await User.insertMany(hashedUsers);
    console.log(`\n✓ Successfully created ${createdUsers.length} users`);
    console.log(`  - 11 Sellers`);
    console.log(`  - 0 Buyers`);

    // Create sample gigs
    const gigsData = [
      {
        userId: createdUsers[0]._id.toString(),
        title: "Modern Responsive Website Design",
        shortTitle: "Web Design",
        desc: "I will create a modern, responsive website design with clean layouts and user-friendly interfaces",
        shortDesc: "Professional web design",
        cat: "Design",
        price: 250,
        cover: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400",
        images: [
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400",
          "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400",
        ],
        deliveryTime: 7,
        revisionNumber: 3,
        features: ["Responsive Design", "Modern UI", "Mobile Optimized", "Clean Code"],
        sales: 15,
      },
      {
        userId: createdUsers[1]._id.toString(),
        title: "Professional Logo Design",
        shortTitle: "Logo Design",
        desc: "I will design a unique and professional logo for your brand that captures your vision",
        shortDesc: "Custom logo design",
        cat: "Design",
        price: 100,
        cover: "https://images.unsplash.com/photo-1626785774625-0b1c2c5b7b5a?w=400",
        images: [
          "https://images.unsplash.com/photo-1626785774625-0b1c2c5b7b5a?w=400",
        ],
        deliveryTime: 5,
        revisionNumber: 2,
        features: ["Vector Format", "Multiple Concepts", "Brand Colors", "High Resolution"],
        sales: 25,
      },
      {
        userId: createdUsers[2]._id.toString(),
        title: "Original Music Composition",
        shortTitle: "Music Composition",
        desc: "I will compose original music for your project, including background scores and soundtracks",
        shortDesc: "Custom music composition",
        cat: "Music & Audio",
        price: 150,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        images: [
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        ],
        deliveryTime: 10,
        revisionNumber: 2,
        features: ["Original Composition", "Multiple Formats", "High Quality", "Commercial License"],
        sales: 12,
      },
      {
        userId: createdUsers[3]._id.toString(),
        title: "Full-Stack Web Development",
        shortTitle: "Web Development",
        desc: "I will develop a complete web application with modern technologies and responsive design",
        shortDesc: "Complete web development",
        cat: "Programming",
        price: 300,
        cover: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
        images: [
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
        ],
        deliveryTime: 14,
        revisionNumber: 3,
        features: ["Frontend & Backend", "Database Integration", "Responsive Design", "Testing"],
        sales: 8,
      },
      {
        userId: createdUsers[4]._id.toString(),
        title: "Video Editing & Animation",
        shortTitle: "Video Animation",
        desc: "I will create engaging video content with professional editing and animation effects",
        shortDesc: "Professional video editing",
        cat: "Video & Animation",
        price: 120,
        cover: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
        images: [
          "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400",
        ],
        deliveryTime: 7,
        revisionNumber: 2,
        features: ["Video Editing", "Animation", "Color Correction", "Sound Design"],
        sales: 18,
      },
      {
        userId: createdUsers[5]._id.toString(),
        title: "Professional Content Writing",
        shortTitle: "Content Writing",
        desc: "I will write high-quality, engaging content for your website, blog, or marketing materials",
        shortDesc: "Professional writing services",
        cat: "Writing & Translation",
        price: 90,
        cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
        images: [
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
        ],
        deliveryTime: 5,
        revisionNumber: 2,
        features: ["SEO Optimized", "Plagiarism Free", "Research Included", "Multiple Revisions"],
        sales: 30,
      },
      {
        userId: createdUsers[6]._id.toString(),
        title: "Blog Post & Article Writing",
        shortTitle: "Blog Writing",
        desc: "I will write engaging blog posts and articles that drive traffic and engagement",
        shortDesc: "SEO blog writing",
        cat: "Writing & Translation",
        price: 100,
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
        images: [
          "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
        ],
        deliveryTime: 6,
        revisionNumber: 2,
        features: ["1000+ Words", "SEO Friendly", "Engaging Content", "Research Based"],
        sales: 22,
      },
      {
        userId: createdUsers[7]._id.toString(),
        title: "User-Centered Web Design",
        shortTitle: "UX Web Design",
        desc: "I will design user-centered websites with focus on usability and user experience",
        shortDesc: "UX-focused web design",
        cat: "Design",
        price: 150,
        cover: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400",
        images: [
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400",
        ],
        deliveryTime: 8,
        revisionNumber: 3,
        features: ["User Research", "Wireframes", "Prototypes", "Usability Testing"],
        sales: 14,
      },
      {
        userId: createdUsers[8]._id.toString(),
        title: "Creative Logo Design",
        shortTitle: "Logo Design",
        desc: "I will create a creative and memorable logo that represents your brand perfectly",
        shortDesc: "Creative logo design",
        cat: "Design",
        price: 90,
        cover: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
        images: [
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
        ],
        deliveryTime: 4,
        revisionNumber: 2,
        features: ["Creative Concepts", "Vector Files", "Brand Guidelines", "Fast Delivery"],
        sales: 20,
      },
      {
        userId: createdUsers[9]._id.toString(),
        title: "Minimal Logo Design",
        shortTitle: "Minimal Logo",
        desc: "I will design a clean, minimal logo that works perfectly across all platforms",
        shortDesc: "Minimalist logo design",
        cat: "Design",
        price: 70,
        cover: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400",
        images: [
          "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400",
        ],
        deliveryTime: 3,
        revisionNumber: 2,
        features: ["Minimal Design", "Scalable Vector", "Multiple Formats", "Quick Turnaround"],
        sales: 16,
      },
      {
        userId: createdUsers[10]._id.toString(),
        title: "Custom Music Production",
        shortTitle: "Music Production",
        desc: "I will produce custom music tracks for your projects, from jingles to full compositions",
        shortDesc: "Custom music production",
        cat: "Music & Audio",
        price: 120,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        images: [
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        ],
        deliveryTime: 8,
        revisionNumber: 2,
        features: ["Custom Composition", "Professional Recording", "Multiple Formats", "Mixing & Mastering"],
        sales: 10,
      },
    ];

    const createdGigs = await Gig.insertMany(gigsData);
    console.log(`✓ Successfully created ${createdGigs.length} gigs\n`);

    console.log("📝 Users created:");
    createdUsers.forEach((user) => {
      console.log(
        `  • ${user.username} (${user.isSeller ? "Seller" : "Buyer"}) - ${user.email}`
      );
    });

    console.log("\n💼 Gigs created by:");
    createdGigs.forEach((gig) => {
      const seller = createdUsers.find(u => u._id.toString() === gig.userId);
      console.log(`  • ${gig.title} ($${gig.price}) by ${seller.username}`);
    });
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    await mongoose.connection.close();
    console.log("\n✅ Database connection closed");
  }
};

connect().then(() => {
  seedUsers();
});
