import { compareDesc, parseISO } from "date-fns";

interface Blog {
  publishedAt: string;
  [key: string]: any;
}

export const cx = (...classNames: string[]): string => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs: Blog[]): Blog[] => {
  return blogs
    .slice()
    .sort((a: Blog, b: Blog) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};