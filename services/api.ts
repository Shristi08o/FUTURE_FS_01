
import { Project, ContactFormData } from '../types';

// Mocked data that would typically come from MongoDB
const MOCK_PROJECTS: Project[] = [
  {
    _id: '1',
    title: 'Nexus AI Dashboard',
    description: 'A full-stack enterprise dashboard for monitoring AI model performance metrics with real-time updates.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Tailwind'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/seed/nexus/600/400'
  },
  {
    _id: '2',
    title: 'EcoSphere E-Commerce',
    description: 'Sustainable marketplace application with integrated headless CMS and Stripe payment processing.',
    techStack: ['Next.js', 'MongoDB', 'Mongoose', 'Stripe API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/seed/eco/600/400'
  },
  {
    _id: '3',
    title: 'ChainAuth Protocol',
    description: 'Decentralized identity management system using blockchain technology for secure user authentication.',
    techStack: ['Solidity', 'Web3.js', 'React', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: 'https://picsum.photos/seed/chain/600/400'
  }
];

export const fetchProjects = async (): Promise<Project[]> => {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 800));
  return MOCK_PROJECTS;
};

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Form submission received:', data);
  return { success: true, message: 'Thank you! Your message has been received.' };
};
