export type PostStatus = "published" | "draft";

export interface Post {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  imageUrl: string;
  status: PostStatus;
  createdAt: string;
  updatedAt: string;
  author: string;
}

export type UserRole = "moderator" | "supporter";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  status: "active" | "suspended";
}

const POSTS_KEY = "jjg_posts";
const USERS_KEY = "jjg_users";

function seed() {
  if (!localStorage.getItem(POSTS_KEY)) {
    const demo: Post[] = [
      {
        id: "1",
        title: "Jigjiga City Road Expansion Project Begins",
        category: "Infrastructure",
        excerpt: "The long-awaited road expansion project connecting the city centre to the university district officially kicked off this week.",
        body: "Construction crews have begun work on the 12km road expansion project that will dramatically improve traffic flow between the city centre and Jigjiga University. The project is funded jointly by the regional government and federal infrastructure grants, with an expected completion date of 18 months.",
        imageUrl: "https://picsum.photos/seed/road-project/800/450",
        status: "published",
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        author: "Admin",
      },
      {
        id: "2",
        title: "Annual Dhaanto Cultural Festival Announced for June",
        category: "Culture & Events",
        excerpt: "The Somali Region cultural ministry has confirmed dates for the annual Dhaanto Festival, bringing musicians and dancers from across the Horn of Africa.",
        body: "The Dhaanto Cultural Festival will run from June 14–18 at the Jigjiga Cultural Centre. This year's edition will feature performers from Somalia, Djibouti, and the Ethiopian Somali diaspora. Entry is free for all residents.",
        imageUrl: "https://picsum.photos/seed/festival-ann/800/450",
        status: "published",
        createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
        updatedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
        author: "Admin",
      },
    ];
    localStorage.setItem(POSTS_KEY, JSON.stringify(demo));
  }
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([]));
  }
}

export function getPosts(): Post[] {
  seed();
  return JSON.parse(localStorage.getItem(POSTS_KEY) || "[]");
}

export function savePost(post: Post): void {
  const posts = getPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = { ...post, updatedAt: new Date().toISOString() };
  } else {
    posts.unshift(post);
  }
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function deletePost(id: string): void {
  const posts = getPosts().filter((p) => p.id !== id);
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
}

export function getUsers(): AdminUser[] {
  seed();
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

export function saveUser(user: AdminUser): void {
  const users = getUsers();
  const idx = users.findIndex((u) => u.id === user.id);
  if (idx >= 0) {
    users[idx] = user;
  } else {
    users.unshift(user);
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function deleteUser(id: string): void {
  const users = getUsers().filter((u) => u.id !== id);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
