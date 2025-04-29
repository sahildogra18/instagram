const comments = [
  {
    id: 1,
    username: 'cricket_lover',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    comment: 'Amazing shot! 🔥',
    likes: 24,
    timestamp: '2h',
    replies: [
      {
        id: 11,
        username: 'sahil_dogra',
        profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
        comment: 'Thank you! 🙏',
        likes: 5,
        timestamp: '1h',
      },
    ],
  },
  {
    id: 2,
    username: 'photography_enthusiast',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
    comment: 'The lighting is perfect! 📸',
    likes: 18,
    timestamp: '3h',
    replies: [],
  },
  {
    id: 3,
    username: 'travel_bug',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    comment: 'Where is this? Looks beautiful! 🌍',
    likes: 32,
    timestamp: '4h',
    replies: [
      {
        id: 31,
        username: 'sahil_dogra',
        profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
        comment: "It's in the mountains! 🏔️",
        likes: 8,
        timestamp: '3h',
      },
      {
        id: 32,
        username: 'travel_bug',
        profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
        comment: 'Amazing! Need to visit there! ✈️',
        likes: 3,
        timestamp: '2h',
      },
    ],
  },
  {
    id: 4,
    username: 'foodie_forever',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
    comment: 'This looks delicious! 😋',
    likes: 15,
    timestamp: '5h',
    replies: [],
  },
  {
    id: 5,
    username: 'fitness_guru',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
    comment: 'Great workout! 💪',
    likes: 27,
    timestamp: '6h',
    replies: [
      {
        id: 51,
        username: 'sahil_dogra',
        profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
        comment: 'Thanks! Working hard! 💯',
        likes: 12,
        timestamp: '5h',
      },
    ],
  },
  {
    id: 6,
    username: 'music_lover',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
    comment: "What's the song in the background? 🎵",
    likes: 9,
    timestamp: '7h',
    replies: [],
  },
  {
    id: 7,
    username: 'art_enthusiast',
    profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
    comment: 'The colors are so vibrant! 🎨',
    likes: 21,
    timestamp: '8h',
    replies: [],
  },
  {
    id: 8,
    username: 'tech_geek',
    profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
    comment: 'What camera did you use? 📸',
    likes: 14,
    timestamp: '9h',
    replies: [
      {
        id: 81,
        username: 'sahil_dogra',
        profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
        comment: 'iPhone 13 Pro! 📱',
        likes: 7,
        timestamp: '8h',
      },
    ],
  },
];

// Export the comments array
export default comments;

// Export individual functions to work with the data
export const getCommentById = id => {
  return comments.find(comment => comment.id === id);
};

export const getCommentsByUsername = username => {
  return comments.filter(comment => comment.username === username);
};

export const getTotalLikes = () => {
  return comments.reduce((total, comment) => total + comment.likes, 0);
};

export const getTotalReplies = () => {
  return comments.reduce((total, comment) => total + comment.replies.length, 0);
};
