export const goToHome = (navigate) => navigate(`/`);

export const goToPokedex = (navigate) => {
  navigate(`/pokedex`);
};

export const goToDetails = (navigate, name) => {
  navigate(`/details/${name}`);
};

export const goToBack = (navigate) => {
  navigate(-1);
};
export const goBackHome = (navigate) => {
  navigate('/');
};
