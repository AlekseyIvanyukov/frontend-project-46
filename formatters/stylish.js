const getIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth - 2);

const stylish = (data) => {
  console.log(data);
};

export default stylish;
