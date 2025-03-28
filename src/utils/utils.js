function parseDate(dateStr) {
  if (/^\d{4}$/.test(dateStr)) {
    dateStr = `January ${dateStr}`;
  } else if (/^[A-Za-z]+\s\d{4}$/.test(dateStr)) {
    dateStr = `1 ${dateStr}`;
  }

  return new Date(dateStr).getTime();
}

export function sortPosts(posts) {
  return posts.sort(
    (a, b) =>
      parseDate(b.frontmatter.date) -
      parseDate(a.frontmatter.date),
  );
}

export function generateRandomHexCode() {
  return (
    "#" +
    (Math.random() * 0xfffff * 1000000)
      .toString(16)
      .slice(0, 6)
      .toUpperCase()
  );
}
