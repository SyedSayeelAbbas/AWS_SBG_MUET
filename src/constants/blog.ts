export interface BlogCategory {
  id: string;
  title: string;
  description: string;
}

export const blogCategories: BlogCategory[] = [
  {
    id: "aws",
    title: "AWS & Cloud",
    description:
      "Practical insights, AWS services, cloud computing concepts, and learning resources for student builders.",
  },
  {
    id: "student-builders",
    title: "Student Builders",
    description:
      "Stories, experiences, projects, and lessons from students building with technology.",
  },
  {
    id: "community",
    title: "Community",
    description:
      "Updates, experiences, and highlights from the AWS Student Builder Club MUET community.",
  },
];

export const blogComingSoon = {
  title: "Our Blog Is Coming Soon",
  description:
    "We're working on a collection of practical articles, AWS learning resources, student experiences, and community stories.",
  status: "Coming Soon",
};