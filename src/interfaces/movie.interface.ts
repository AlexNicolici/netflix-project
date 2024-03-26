export interface MyMoviesListInterface {
  name: string;
  description: string;
  image_url: string;
  category: {
    id: number;
    label: string;
  };
  actors: {
    id: number;
    label: string;
  }[];
}

export interface MyMoviesDataInterface {
  data: MyMoviesListInterface[];
  isLoadingMovie: boolean;
  isErrorMovie: boolean;
  errorMessageMovie: string;
}
