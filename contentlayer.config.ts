import { makeSource, defineDocumentType } from '@contentlayer/source-files';

const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: "blogs/**/*.mdx",
    fields: {
        title: { 
            type: "string", 
            required: true, 
        },
       
        publishedAt: { 
            type: "date", 
            required: true,
        },

        updatedAt: { 
            type: "date", 
            required: false,
        },

        description: { 
            type: "string", 
            required: true,
        },

        image: { 
            type: "string",
            required: false,
        },

        isPublished: { 
            type: "boolean", 
            required: true 
        },

        author: { 
            type: "string", 
            required: true 
        },

        tags: { 
            type: "list", 
            of: { type: "string" },
            required: false 
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc: any) => `/blogs/${doc._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "content",
    documentTypes: [
       Blog
    ],
});
