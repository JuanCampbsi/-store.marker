import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    width: 100%;
    flex: 1;    

    justify-content: center;
    align-items: center;
`;

export const MapContainerView = styled(MapView)`
    width: 100%;
    height: 100%;
`;

export const CalloutContainer = styled.View`
    width: 160px;
    height: 50px;  
   
    background-color: red;
    border-radius: 16px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const CalloutText = styled.Text`
    color: #FFF;

    font-size: 20px;
    font-family: Nunito_700Bold;
`;

export const Footer = styled.View`  
    width: 90%;    
    position: absolute;  
    
    padding: 0 32px;
    bottom: ${RFValue(20)}px;   
   
    background-color: #FFF;
    border-radius: 20px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`;

export const FooterText = styled.Text`
    color: #8fa7b3;
    font-family: Nunito_700Bold;
    font-size: ${RFValue(18)}px;
    
    padding: 24px;
    align-items: center;
`;

export const CreateStoreButton = styled(RectButton)`
    width: 60px;
    height: 60px;   

    background-color: #15C3D6;
    border-radius: 20px;

    justify-content: center;
    align-items: center;
`;



