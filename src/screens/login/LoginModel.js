import { useDispatch, useSelector } from 'react-redux';
import { AppStackC } from '@app/constants/navigation';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '@app/store/auth/authSlice';

export function useHomeModel() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onPressSigninButton = (data) => {
    //make api call
    // console.log("api called", data);
    dispatch(signIn(data));
    setTimeout(() => {
      navigation.navigate(AppStackC.ADVERTISEMENT_VIEW)
    }, 1000);
    // dispatch(setStaticUser());
  };

 

  return {
    onPressSigninButton
  };
}
