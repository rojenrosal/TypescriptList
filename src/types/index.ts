interface IItem {
  id: number;
  player: string;
  logo: string;
  active: boolean;
  champion: boolean;
  team: string;
  ign: string;
  role: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export default IItem;
