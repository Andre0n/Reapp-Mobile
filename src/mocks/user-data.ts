import { IProject } from 'src/types';

export interface IUser {
  id: number;
  name: string;
  email: string;
  following: number;
  donations: number;
  profileImage?: string;
}

export const user: IUser = {
  id: 1,
  name: 'Reapp Admin',
  email: 'reapp_admin@reapp.com',
  following: 4,
  donations: 4,
  profileImage: 'https://placehold.co/600x400/png',
};

export interface IUserDonation {
  title: string;
  subtitle?: string;
}

export const userDonations: IUserDonation[] = [
  {
    title: 'Doação de Livros',
    subtitle: '200 livros de literatura para a biblioteca municipal',
  },
  {
    title: 'Equipamentos para Escolas',
    subtitle: '15 kits de ciências para escolas locais',
  },
  {
    title: 'Apoio a Alimentação',
    subtitle: '500 kg de alimentos para o banco alimentar da cidade',
  },
  {
    title: 'Roupas para o Inverno',
    subtitle: '300 casacos e agasalhos para moradores de rua',
  },
  {
    title: 'Patrocínio Esportivo',
    subtitle: 'Equipamento esportivo para a equipe juvenil de futebol',
  },
  {
    title: 'Equipamentos para Escolas',
    subtitle: '15 kits de ciências para escolas locais',
  },
  {
    title: 'Apoio a Alimentação',
    subtitle: '500 kg de alimentos para o banco alimentar da cidade',
  },
  {
    title: 'Roupas para o Inverno',
    subtitle: '300 casacos e agasalhos para moradores de rua',
  },
  {
    title: 'Patrocínio Esportivo',
    subtitle: 'Equipamento esportivo para a equipe juvenil de futebol',
  },
];

export interface IUserSavedPost {
  userImageUrl: string;
  postImageUrl: string;
  nameInstitution: string;
  description: string;
  timeAgo: string;
}

export const userSavedPosts: IUserSavedPost[] = [
  {
    userImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    postImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    nameInstitution: 'Universidade ABC',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    timeAgo: '2 hours ago',
  },
  {
    userImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    postImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    nameInstitution: 'Empresa XYZ',
    description: 'Sed euismod ligula in nunc bibendum, a eleifend quam congue.',
    timeAgo: '1 day ago',
  },
  {
    userImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    postImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    nameInstitution: 'Hospital ABC',
    description:
      'Aenean mattis odio sit amet purus gravida, sed vehicula arcu laoreet.',
    timeAgo: '3 days ago',
  },
  {
    userImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    postImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    nameInstitution: 'Escola XYZ',
    description: 'Vestibulum at justo nec ex hendrerit congue.',
    timeAgo: '4 days ago',
  },
  {
    userImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    postImageUrl:
      'https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg',
    nameInstitution: 'Companhia ABC',
    description: 'Phasellus nec libero a lorem ullamcorper dictum.',
    timeAgo: '5 days ago',
  },
];

export const userFavoritesProjects: IProject[] = [
  {
    id: 1,
    name: 'Reforestation_1',
    subtitle: 'Semear Esperança e Sustentabilidade',
    institutionId: 16,
    categoryId: 1,
    description:
      'Efforts to replant and restore lost forest areas, combating climate change and preserving biodiversity. Project number 1 focuses on reforestation.',
    image:
      'https://ampliar.org.br/wp-content/uploads/2021/02/de-quais-formas-eu-posso-fazer-doacao-para-um-projeto-social-01.jpg',
    introdutionVideo:
      'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  },
  {
    id: 2,
    name: 'HomelessSupport_2',
    subtitle: 'Semear Esperança e Sustentabilidade',
    institutionId: 9,
    categoryId: 1,
    description:
      'Aid and resources for homeless individuals, aiming to provide shelter, healthcare, and employment opportunities. Project number 2 focuses on homeless support.',
    image:
      'https://ampliar.org.br/wp-content/uploads/2021/02/de-quais-formas-eu-posso-fazer-doacao-para-um-projeto-social-01.jpg',
    introdutionVideo:
      'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  },
  {
    id: 3,
    name: 'AnimalRescue_3',
    subtitle: 'Semear Esperança e Sustentabilidade',
    institutionId: 3,
    categoryId: 1,
    description:
      'Rescue and rehabilitation of abandoned or injured animals, providing them with care and a safe habitat. Project number 3 focuses on animal rescue.',
    image:
      'https://ampliar.org.br/wp-content/uploads/2021/02/de-quais-formas-eu-posso-fazer-doacao-para-um-projeto-social-01.jpg',
    introdutionVideo:
      'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  },
  {
    id: 4,
    name: 'HomelessSupport_4',
    subtitle: 'Semear Esperança e Sustentabilidade',
    institutionId: 19,
    categoryId: 1,
    description:
      'Aid and resources for homeless individuals, aiming to provide shelter, healthcare, and employment opportunities. Project number 4 focuses on homeless support.',
    image:
      'https://ampliar.org.br/wp-content/uploads/2021/02/de-quais-formas-eu-posso-fazer-doacao-para-um-projeto-social-01.jpg',
    introdutionVideo:
      'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  },
];
