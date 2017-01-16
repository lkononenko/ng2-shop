export class CONST {
  static SERVER_NAME: string = document.getElementsByTagName('base')[0]['href'];
  static API_URL: string = CONST.SERVER_NAME + 'assets/api/';
  static IMAGE_URL: string = CONST.SERVER_NAME + 'assets/images/';
  static IMAGE_DEFAULT: string = 'default.png';
}
