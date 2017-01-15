export class CONST {
  static SERVER_NAME: string = window.location.protocol + '//' + window.location.host;
  static API_URL: string = CONST.SERVER_NAME + '/api/';
  static IMAGE_URL: string = CONST.SERVER_NAME + '/assets/images/';
  static IMAGE_DEFAULT: string = 'default.png';
}
