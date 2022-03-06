import IItem from "../types";

const getTags = (data: IItem) => {
  let tags = [];
  tags = [data.role, data.role, ...data.languages, ...data.tools];
  return tags;
};

const getStatus = (data: IItem) => {
  let status = [];
  if (data.active) status.push("RETIRED");
  if (data.champion) status.push("CHAMPION");

  return status;
};

const getOptions = (data: IItem) => {
  let options = [];
  if (data.postedAt) options.push(data.postedAt);
  if (data.contract) options.push(data.contract);
  if (data.location) options.push(data.location);

  return options;
};

export { getTags, getStatus, getOptions };
