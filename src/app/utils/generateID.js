
export default function generateId() {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 10) +
      "_"
    );
  }
