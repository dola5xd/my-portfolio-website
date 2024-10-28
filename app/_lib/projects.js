import { client } from "./sanity";

const options = { next: { revalidate: 0 } };

const query = `*[_type == "projects"]{_id,title,image,stack,url,description}`;

export const getProjects = async function () {
  const posts = await client.fetch(query, {}, options);
  return posts;
};
