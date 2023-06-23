
// const [timer, setTimer] = useState(60);    
// const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);

// useEffect(() => {
//   timer > 0 && setTimeout(timeOutCallback, 1000);
// }, [timer, timeOutCallback]);

// console.log(timer);

// const resetTimer = function () {
//   if (!timer) {
//     setTimer(60);
//   }
// };
// <Text style={styles.textLogin} onPress={resetTimer}>Resend OTP ({timer})</Text>

import React, { useState, useEffect } from 'react';
import { Pressable, StatusBar } from 'react-native';

function OTP() {
  const [otpCode, setOTPCode] = useState("");
 const [isPinReady, setIsPinReady] = useState(false);
 const maximumCodeLength = 4;
 return (
   <Pressable style={styles.container} onPress={Keyboard.dismiss}>
     <OTPInput
       code={otpCode}
       setCode={setOTPCode}
       maximumLength={maximumCodeLength}
       setIsPinReady={setIsPinReady}
     />
     <StatusBar style="auto" />
   </Pressable>
 );
}

export default OTP;