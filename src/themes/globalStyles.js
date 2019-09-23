import {StyleSheet} from 'react-native';
import {Colors,Metrics,Fonts} from './index';


const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: Metrics.WIDTH * 0.01,
        paddingVertical: Metrics.HEIGHT * 0.01,
    },
    fab: {
        position: 'absolute',
        width: Metrics.WIDTH*0.15,
        height: Metrics.WIDTH*0.15,
        alignItems: 'center',
        justifyContent: 'center',
        right: Metrics.WIDTH*0.05,
        bottom: Metrics.WIDTH*0.1,
        backgroundColor: Colors.FAB_COLOR,
        borderRadius: 30,
        elevation: 8,
    },
    fabIcon: {
        fontSize: Fonts.moderateScale(20),
        color: Colors.WHITE,

    },
});
export default globalStyles;
