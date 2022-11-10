/**
 * Created by nghinv on Sun Nov 06 2022
 */

export interface VerifyPasswordInterface {
  isMoreThanTenCharacters: boolean;
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasNumber: boolean;
  hasSpecialCharacter: boolean;
  confirmPassword: boolean;
}
