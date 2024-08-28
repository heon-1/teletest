import WebApp from '@twa-dev/sdk';
import TonConnect from '@tonconnect/sdk';

const tonConnectUI = new TonConnect();

document.getElementById('flipBtn').addEventListener('click', flipCoin);
document.getElementById('connectWallet').addEventListener('click', connectWallet);

async function flipCoin() {
    const result = Math.random() < 0.5 ? '앞면' : '뒷면';
    document.getElementById('result').textContent = `결과: ${result}`;
    
    // TON 월렛이 연결되어 있다면 거래를 시도합니다.
    if (tonConnectUI.connected) {
        try {
            // 여기에 실제 TON 거래 로직을 구현합니다.
            await WebApp.showAlert('TON 거래가 시작되었습니다!');
        } catch (error) {
            WebApp.showAlert('거래 중 오류가 발생했습니다.');
        }
    } else {
        WebApp.showAlert('먼저 TON 월렛을 연결해주세요.');
    }
}

async function connectWallet() {
    try {
        await tonConnectUI.connect();
        WebApp.showAlert('TON 월렛이 연결되었습니다!');
    } catch (error) {
        WebApp.showAlert('월렛 연결에 실패했습니다.');
    }
}

// Telegram WebApp 초기화
WebApp.ready();