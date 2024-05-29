import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup() {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  const result = [];
  return promises.allSettled(promises).then((results) => {
    results.map(({ status, value, reason }) => result.push({
      status,
      value: status === 'rejected' ? reason.toString() : value,
    }));
    return result;
  });
}
