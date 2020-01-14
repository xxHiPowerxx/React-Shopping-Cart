let lastId = 0;

function componentId(prefix = "id") {
  lastId++;
  return `${prefix}-${lastId}`;
}

export default componentId;
