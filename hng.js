function updateAttributes() {
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackTrack = document.querySelector('[data-testid="myTrack"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const utcTime = now.getTime();

    slackUserName.textContent = "Ayoareke"; 
    slackTrack.textContent = "Frontend"; 
    currentDayOfTheWeek.textContent = dayOfWeek;
    currentUTCTime.textContent = utcTime;
}


updateAttributes();


setInterval(updateAttributes, 1000);
