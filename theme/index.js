const pallete = [
  {
    // 0-orange
    text: '#420475',
    bgColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    // 1-dark gray
    text: '#334155',
    bgColor: (opacity) => `rgba(30, 41, 59, ${opacity})`,
  },
  {
    // 2-purple
    text: '#7c3aed',
    bgColor: (opacity) => `rgba(167, 139, 250, ${opacity})`,
  },
  {
    // 3-green
    text: '#009950',
    bgColor: (opacity) => `rgba(0, 179, 89, ${opacity})`,
  },
  {
    // 4-teal
    text: '#14b8a6',
    bgColor: (opacity) => `rgba(45, 212, 191, ${opacity})`,
  },
  {
    // 5-red
    text: '#dc2626',
    bgColor: (opacity) => `rgba(248, 113, 113, ${opacity})`,
  },
  {
    // 6-red
    text: '#dc2626',
    bgColor: (opacity) => `rgba(240, 93, 35, ${opacity})`,
  },
];
export const themeColors = {
  ...pallete[2],
};
