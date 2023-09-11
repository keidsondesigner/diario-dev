export interface IAuthor {
  hastag: string;
  name: string;
  occupation: string;
  title: string;
  content: string;
  imgAvatar: string;
  alt: string;
}

export interface IPost {
  id?: number;
  author: IAuthor;
  published: number;
}
