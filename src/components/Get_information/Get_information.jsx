const Info = [
  {
    id: 1,
    work_title: 'Leontyne',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: ['React', 'CSS', 'HTMl'],
    work_image: 'https://robohash.org/porrohicut.png?size=50x50&set=set1',
  },
  {
    id: 2,
    work_title: 'Filberto',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: ['React', 'CSS', 'HTMl'],
    work_image: 'https://robohash.org/illoeligendiqui.png?size=50x50&set=set1',
  },
  {
    id: 3,
    work_title: 'Dot',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: [{}, {}],
    work_image:
      'https://robohash.org/numquamdistinctiocorporis.png?size=50x50&set=set1',
  },
  {
    id: 4,
    work_title: 'Simona',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: [{}, {}, {}],
    work_image: 'https://robohash.org/corporisetveniam.png?size=50x50&set=set1',
  },
  {
    id: 5,
    work_title: 'Les',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: ['React', 'CSS', 'HTMl'],
    work_image: 'https://robohash.org/idutet.png?size=50x50&set=set1',
  },
  {
    id: 6,
    work_title: 'Lexine',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: [{}, {}],
    work_image: 'https://robohash.org/illumiureid.png?size=50x50&set=set1',
  },
  {
    id: 7,
    work_title: 'Cecile',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: [{}, {}, {}, {}],
    work_image: 'https://robohash.org/ipsamrerumcum.png?size=50x50&set=set1',
  },
  {
    id: 8,
    work_title: 'Karla',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: [{}, {}, {}],
    work_image: 'https://robohash.org/velitimpeditunde.png?size=50x50&set=set1',
  },
  {
    id: 9,
    work_title: 'Reider',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: [{}, {}, {}],
    work_image:
      'https://robohash.org/veritatisipsamquam.png?size=50x50&set=set1',
  },
  {
    id: 10,
    work_title: 'Lon',
    work_description: 'a4f13ad87cc8d49af07a09ed41bac4bd8ebf3992',
    work_technologies: [{}, {}],
    work_image: 'https://robohash.org/sitquisvel.png?size=50x50&set=set1',
  },
];
export const Get_information = () => {
  return new Promise((response, reject) => {
    setTimeout(() => {
      response(Info);
    }, 3000);
  });
};
