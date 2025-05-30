const clubs = [
    {
      name: "Velocity",
      description: "Velocity is the development club of IIIT Dharwad aiming to cultivate and foster a development culture among all the students. The club encompasses a community that allows everyone to participate and grow together. Velocity has held many events and workshops to build a strong confidence and foundation among all batches in development. IIIT Dharwad's website is designed & developed by Velocity!",
   
      
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Clubs+IIIT+Dharwad.png",
      email: "velocity@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/velocity.iiitdwd"
    },
    {
      name: "Iridescence",
      description: "Iridescence is the official club of IIIT Dharwad for photography, videography and editing. This club serves as a creative hub for students who are passionate about capturing moments, telling stories through visuals, and honing their skills in various aspects of multimedia.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Iridescence+IIIT+Dharwad.jpg",
      email: "iridescence@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/iridescence.iiitdwd?igsh=bzBzbjQ3MDJjcnBq"
    },
    {
      name: "IEEE SB & CS",
      description: "The IEEE Student Branch and Computer Society of IIIT Dharwad serves as a vibrant hub for students passionate about technology, engineering, and innovation. Our branch fosters a community of learning, collaboration, and professional growth. We aim to empower students with the knowledge, skills, and networking opportunities essential for success in the various fields of technology through a wide range of activities, workshops, seminars, and projects.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/IIIT+Dharwad+Clubs.jpg",
      email: "ieeestudentbranch@iiitdwd.ac.in",
      instagram :" jhf"
    
    },
    {
      name: "Techniosys",
      description: "Techniosys is the tech innovation club of IIIT Dharwad, dedicated to exploring and mastering upcoming technology platforms. Our club focuses on organizing events and workshops on APIs, cloud services, and other cutting-edge technologies to help students enhance their skills and improve their CVs. In addition to tech-centric activities, Techniosys offers a unique blend of relaxation and fun through our dedicated eSports team, which hosts exciting eSports tournaments and gaming sessions.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Techniosys+Club+Logo.png",
      email: "techniosys@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/techniosys.iiitdwd/"
    },
    {
      name: "Zeitgeist",
      description: "The Zeitgeist Club of IIIT Dharwad is a dynamic and intellectually stimulating student organization that caters to enthusiasts of literature, public speaking, and anchoring. This club serves as a vibrant platform for students to explore and express their literary talents, enhance their communication skills, and engage in creative discourse.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Zeigeist+Clubs+IIIT+Dharwad.jpg",
      email: "zeitgeist@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/zeitgeist_iiitdwd?igsh=MTljYzl6YmUzdjFjOA=="
    },
    {
      name: "E-Cell",
      description: "E-Cell Club at IIIT Dharwad is a dynamic platform designed to empower students with entrepreneurial ambitions. We are dedicated to nurturing the entrepreneurial spirit within our students by providing them with the resources, mentorship, and opportunities they need to succeed. Our club is a hub for innovation and creativity, where students can explore their ideas, develop business skills, and connect with like-minded individuals and industry professionals.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Ecell+IIIT+Dharwad.jpeg",
      email: "ecell@iiitdwd.ac.in",
      instagram :"lgy8 "
    },
    {
      name: "LimeLight",
      description: "Limelight, the drama club of IIIT Dharwad, is not just about performances—it's about the people who make them happen. From brainstorming sessions to late-night rehearsals, we pour our hearts into every production, creating something truly special that resonates with audiences and fosters a sense of belonging like no other. Here, creativity knows no bounds.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Drama+from+IIIT+Dharwad.jpg",
      email: "limelight@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/limelight.iiitdwd?igsh=aDVnamd4OG5peWx5"
    },
    {
      name: "BlocSoc",
      description: "BlocSoc is an active community focused on the exploration and advancement of blockchain technology. Our club unites enthusiasts and developers to learn, collaborate, and drive innovation in the blockchain arena.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Blocsoc+Club.jpg",
      email: "blocsoc@iiitdwd.ac.in",
      instagram :"vjf "

    },
    {
      name: "Mosaic Club",
      description: "Mosaic, the Art Club of IIIT Dharwad, is dedicated to nurturing creativity and artistic expression. The club organizes a variety of activities, including painting, sketching, crafting, etc. Mosaic provides a platform for students to explore different art forms, showcase their talents, and collaborate on creative projects, enriching the campus artistic landscape.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Mosaic+from+IIIT+Dharwad.jpg",
      email: "mosaic@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/mosaic_iiitdwd?igsh=NDc5OGUxcDlocjJ4"
    },
    {
      name: "DSAI Society",
      description: "The DSAI Society at IIIT Dharwad focuses on promoting knowledge and interest in Data Science and Artificial Intelligence. The society organizes workshops, seminars, competitions, and learning challenges to help students enhance their skills and stay updated with the latest advancements in the industry. Through these activities, the DSAI Society aims to foster a community of tech enthusiasts and prepare students for careers in these rapidly evolving fields.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Clubs+IIIT+Dharwad+(1).png",
      email: "dsaisoc@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/dsaisoc_iiitdwd?igsh=bmxidWV1ZnpjZmQ0"
    },
    {
      name: "Dance Club",
      description: "The official Dance Club of IIIT Dharwad is filled with the best dancers of our college. This club is dedicated to promoting dance as a form of artistic expression and physical fitness among its members. Known for its energetic atmosphere and inclusive environment, the club welcomes students of all skill levels, encouraging everyone to explore various dance styles and techniques.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Dance+Club.png",
      email: "dynamight@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/velocity_iiitdh/"
    },
    {
      name: "GDSC IIIT Dharwad",
      description: "Google Developer Students Club is a community group for students who are interested in technology, especially technology from Google. It is a place to grow as a developer, starting from a beginner developer with resources and labs provided by Google itself. From app development, web development, AI/ML, cloud computing, and IoT, we host workshops and competitions, and there is something for everyone. GDSC is also about connecting, learning together, and growing together. We guide members in their career journey from internships to hackathons and leadership skills.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/GDSC+Club+Image.jpeg",
      email: "gdsc@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/gdsc_iiitdwd?igsh=MThueGhyZGN2M2dxcw%3D%3D&utm_source=qr"
    },
    {
      name: "Quantum Computing Club",
      description: "The Quantum Computing Club of IIIT Dharwad is a pioneering student organization dedicated to exploring the frontiers of quantum computing, a cutting-edge field poised to revolutionize technology and science. The club aims to educate, inspire, and engage students in the fascinating world of quantum mechanics and its applications in computing.",
      logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Quantum+Club.jpeg",
      email: "qcclub@iiitdwd.ac.in",
      instagram : "https://www.instagram.com/qciiitdwd?igsh=azZzd3RtMzhndGEx"
    },
    {
        name: "IRIS",
        description: "IRIS is a dynamic community of students united by a shared passion for robotics and technology. Whether you're a seasoned robotics enthusiast or just starting to explore the world of engineering, our club offers a welcoming space for everyone. Beyond robotics, we delve into various domains including compilers, IoT, circuit designing, and VLSI, providing a broad spectrum of opportunities for learning and innovation. Join us to collaborate, learn, and contribute to exciting technological advancements.",
        logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Iris+from+IIIT+Dharwad.png",
        email: "iris@iiitdwd.ac.in",
        instagram : "https://www.instagram.com/iris_iiitdwd?igsh=czJkY3d4YXRwaWYw"
      },
      {
        name: "In Motion",
        description: "In Motion, the film club of IIIT Dharwad, is a vibrant hub for cinephiles. Dedicated to celebrating the art of cinema, captivating film screenings, and insightful discussions. The club provides a platform for budding film enthusiasts to explore diverse genres, and engage in creating new content immersed in the world of filmography.",
        logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Inmotion+Club+Image.jpg",
        email: "inmotion@iiitdwd.ac.in",
        instagram : "https://www.instagram.com/inmotion.iiitdwd?igsh=MXc0eHE2eDc5Ymt3eQ=="
      },
      {
        name: "Inquizitive",
        description: "We at InQuizitive are dedicated to inculcating a culture of curiosity and knowledge among the students of IIIT Dharwad through quizzing. Our club regularly organizes innovative quizzes covering a wide range of topics, including technology, science, and pop culture. We strive to enhance the critical thinking of students by providing a platform for all to challenge themselves while learning in a positive and engaging environment.",
        logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Inquizitive+Club+Logo.png",
        email: "inquizitive@iiitdwd.ac.in",
        instagram : "https://www.instagram.com/inquizitive.iiitdwd/"
      },
      {
        name: "Prabodhini",
        description: "The Prabodhini Club is a dynamic club of IIIT Dharwad rooted in the rich heritage of Indian Knowledge systems. This club offers a unique opportunity for students to learn about teachings that have shaped Indian culture and learn from the profound teachings of the Vedas and delve into the depths of ancient Indian philosophies, yoga, and Ayurveda.",
        logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Clubs+IIIT+Dharwad.jpg",
        email: "prabodhini@iiitdwd.ac.in",
        instagram : "https://www.instagram.com/prabodhini_iiitdwd?igsh=Z2FqbDV6OXZ5NXAy"
      },
      {
        name: "440 Hz",
        description: "It is the music (sangeet) club of our college. It is a hub for musically inclined students, providing a platform for them to explore, express, and enhance their musical talents. The club is known for its vibrant and inclusive atmosphere, welcoming musicians of all skill levels and backgrounds to come together and share their passion for music.",
        logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Music+Clubs+IIIT+Dharwad.png",
        email: "440hz@iiitdwd.ac.in",
        instagram : "https://www.instagram.com/440hz_iiitdwd?igsh=MTVuMWp4OTMxeGNkeQ=="
      },
      {
        name: "Return 0",
        description: "Return 0 is the competitive programming club of IIIT Dharwad, dedicated to fostering a vibrant community of algorithmic problem solvers. Our club encourages participation in coding competitions and problem-solving activities to enhance analytical and programming skills. Through interactive sessions, discussions, and various competitions, we promote continuous learning and growth in the field of competitive programming.",
        logoUrl: "https://iiit-app.s3.ap-south-1.amazonaws.com/clubs/Return+Club+Image.jpeg",
        email: "return0@iiitdwd.ac.in",
        instagram : "https://www.instagram.com/return0_iiitdwd/"
      }
];
module.exports=clubs;
    
  