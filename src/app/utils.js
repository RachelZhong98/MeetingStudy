export const updateCompletedSurveyList = (history, currentPath) => {
  let visitedAll = true;
  let completedSurvey = localStorage.getItem("completedSurvey") || "";

  if (!completedSurvey.match(currentPath))
    completedSurvey = completedSurvey + currentPath + ",";

  localStorage.setItem("completedSurvey", completedSurvey);

  let surveyList = completedSurvey.slice(0, -1).split(",");

  let routeList = ["exp1", "exp2", "exp3"];

  shuffleArray(routeList).some((route) => {
    if (!surveyList.includes(route)) {
      visitedAll = false;
      history.push(`/${route}`);
      return true;
    }
    return false;
  });

  if (visitedAll) {
    history.push(`/survey`);
  }
};

export const handleSurveyPageRoute = async (history, currentPath) => {
  let completedSurvey = localStorage.getItem("completedSurvey");

  if (!completedSurvey) return history.push("/");

  let surveyList = completedSurvey.slice(0, -1).split(",");
  let surveyRoute = currentPath.replace("/", "").replace("survey-", "exp");
  let routeIndex = surveyList.indexOf(surveyRoute) + 1;

  if (routeIndex === surveyList.length) {
    return history.push(`/survey-5`);
  }

  surveyRoute = surveyList[routeIndex].replace("exp", "survey-");
  history.push(`/${surveyRoute}`);
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};
