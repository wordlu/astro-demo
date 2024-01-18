export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    header:boolean;
    toolbar:boolean;
    style:object;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}