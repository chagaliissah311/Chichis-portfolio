import darlineImg from '../public/images/darline_img.jpeg';
import outdoorShoot from '../public/images/outdoor_shoot.jpeg';
import outdoorShoot1 from '../public/images/outdoor_shoot1.jpeg';
import outdoorShoot2 from '../public/images/outdoor_shoot2.jpeg';
import outdoorShoot3 from '../public/images/outdoor_shoot3.jpeg';
import outdoorShoot4 from '../public/images/outdoor_shoot4.jpeg';
import pinky from '../public/images/pinky.jpeg';
import pollsAwards from '../public/images/polls_awards.jpeg';
import projectImg from '../public/images/project_img.jpeg';
import projectImg2 from '../public/images/project_img2.jpeg';
import pulseImg from '../public/images/pulse_img.jpeg';
import studio10 from '../public/images/studio10.jpeg';
import studio11 from '../public/images/studio11.jpeg';
import studio12 from '../public/images/studio12.jpeg';
import studio2 from '../public/images/studio2.jpeg';
import studio3 from '../public/images/studio3.jpeg';
import studio4 from '../public/images/studio4.jpeg';
import studio5 from '../public/images/studio5.jpeg';
import studio6 from '../public/images/studio6.jpeg';
import studio7 from '../public/images/studio7.jpeg';
import studioImg1 from '../public/images/studio_img1.jpeg';

export const imageMap = {
  '/images/darline_img.jpeg': darlineImg,
  '/images/outdoor_shoot.jpeg': outdoorShoot,
  '/images/outdoor_shoot1.jpeg': outdoorShoot1,
  '/images/outdoor_shoot2.jpeg': outdoorShoot2,
  '/images/outdoor_shoot3.jpeg': outdoorShoot3,
  '/images/outdoor_shoot4.jpeg': outdoorShoot4,
  '/images/pinky.jpeg': pinky,
  '/images/polls_awards.jpeg': pollsAwards,
  '/images/project_img.jpeg': projectImg,
  '/images/project_img2.jpeg': projectImg2,
  '/images/pulse_img.jpeg': pulseImg,
  '/images/studio10.jpeg': studio10,
  '/images/studio11.jpeg': studio11,
  '/images/studio12.jpeg': studio12,
  '/images/studio2.jpeg': studio2,
  '/images/studio3.jpeg': studio3,
  '/images/studio4.jpeg': studio4,
  '/images/studio5.jpeg': studio5,
  '/images/studio6.jpeg': studio6,
  '/images/studio7.jpeg': studio7,
  '/images/studio_img1.jpeg': studioImg1,
};

export function resolveImagePath(src) {
  return imageMap[src] ?? src;
}
