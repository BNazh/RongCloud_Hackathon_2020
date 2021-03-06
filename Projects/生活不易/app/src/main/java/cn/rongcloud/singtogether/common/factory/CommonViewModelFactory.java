package cn.rongcloud.singtogether.common.factory;

import androidx.annotation.NonNull;
import androidx.lifecycle.ViewModel;
import androidx.lifecycle.ViewModelProvider;

import cn.rongcloud.singtogether.net.client.HttpClient;
import cn.rongcloud.singtogether.ui.login.LoginViewModel;
import cn.rongcloud.singtogether.ui.main.AppVersionViewModel;
import cn.rongcloud.singtogether.ui.room.ChatRoomViewModel;
import cn.rongcloud.singtogether.ui.room.CreateRoomViewModel;
import cn.rongcloud.singtogether.ui.room.member.RoomMemberViewModel;
import cn.rongcloud.singtogether.ui.splash.SplashViewModel;

/**
 * VM传参构造器
 */
public class CommonViewModelFactory extends ViewModelProvider.NewInstanceFactory {

    @NonNull
    @Override
    public <T extends ViewModel> T create(@NonNull Class<T> modelClass) {
        if (modelClass == CreateRoomViewModel.class) {
            return (T) new CreateRoomViewModel(HttpClient.getInstance().getRoomModel());
        } else if (modelClass == LoginViewModel.class) {
            return (T) new LoginViewModel(HttpClient.getInstance().getUserModel());
        } else if (modelClass == ChatRoomViewModel.class) {
            return (T) new ChatRoomViewModel(HttpClient.getInstance().getRoomModel(), HttpClient.getInstance().getMicModel(), HttpClient.getInstance().getUserModel());
        } else if (modelClass == RoomMemberViewModel.class) {
            return (T) new RoomMemberViewModel(HttpClient.getInstance().getRoomModel(), HttpClient.getInstance().getMicModel());
        } else if (modelClass == SplashViewModel.class) {
            return (T) new SplashViewModel();
        } else if (modelClass == AppVersionViewModel.class) {
            return (T) new AppVersionViewModel(HttpClient.getInstance().getAppModel());
        }
        return null;
    }
}
