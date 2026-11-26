export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "/images/certs/aws-ccp.svg",
    credentialId: "AWS-CCP-0001",
    credentialUrl: "https://aws.amazon.com/certification/",
  },
  {
    title: "Meta Back-End Developer Professional Certificate",
    issuer: "Coursera · Meta",
    date: "2024",
    image: "/images/certs/meta-backend.svg",
    credentialUrl: "https://www.coursera.org/",
  },
];
