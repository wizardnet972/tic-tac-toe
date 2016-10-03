export interface Credentials {
  username: string;
  password: string;
}

export interface Avatar {
  permalink: string;
  cache: string;
}

export interface User {
  username: string;
  about: string;
  name: string;
  url: string;
  isFollowing: boolean;
  isFollowedBy: boolean;
  profileUrl: string;
  avatar: Avatar;
  id: string;
  isAnonymous: boolean;
  email: string;
}
