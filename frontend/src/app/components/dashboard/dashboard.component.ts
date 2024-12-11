import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  summary: string = "Within the last six months Generative AI has quickly transformed industries, enabling businesses to have artificial intelligence for the creation of their content, automation, and interacting with customers. In the last six months, innovations in generative Ai's main focus has been improving on accessibility and business impact. Some of the tools like ChatGPT, OpenAI's, Google Bard, and Microsoft Copilot have revisited productivity by aiding with document drafting, brainstorming, and also coding. Canva Magic Design and Adobe Firefly empower creators that have an AI-driven image editing and graphic design, streaming workflows for professionals, and novices alike. Tools that are industry specific have emerged, one of the tools being Jasper AI. This was done to market content generation, Synthesia for creating AI-powered video demos, and Runway AI for video editing. There are also tools that provide AI-driven writing assistance like GrammarlyGO, whereas Murf AI and ElevenLabs solely focus on transforming text into a natural-sounding speech. AI chatbots like Intercome and HubSpot have done nothing short of enhance customer support, personalized responses, and delivering things to customers faster. Statistics highlight that gereative AI's transformative potential is at an eighty percent for being considered by business leaders. AI has been essential for innovation for business leaders. It is over fifty percent of businesses that use these generative AI tools daily to complete tasks at the job. These advancements in data efficiency and ethical AI keeps the industry continuously addressing concerns like data privacy and misinformation. The tools promise to further revolutionize the way we as a community work, interact with each other, interact with technology, and create. ";
  reference: string = "https://hatchworks.com/blog/gen-ai/generative-ai-statistics/";
  technicalDetails: string = "I built this project called K06 Application using a modern MERN-like tech stack. This project uses MongoDB, Express.js, Angular, and Node.js. The backend of my project is implemented with Node.js and Express.js, this provides RESTful APIs for user authentication and retrieval of data. MongoDB is what serves as the database, this is used for storing credentials and chart data. The frontend uses Angular to create a interactive and responsive Single Page Application, adhering to ADA/WCAG accessibility principles. I also used JWT-based authentication, ensuring to protect routes within the website. Both the backend and the frontend are hosted on the same NGINX for seamless deployment and communication.";

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}



