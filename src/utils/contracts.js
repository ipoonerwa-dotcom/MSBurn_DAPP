// ============================================================
//  合约地址与ABI配置
//  部署后替换地址即可
// ============================================================

// BSC Mainnet
export const CHAIN_ID = 56
export const CHAIN_CONFIG = {
  chainId: '0x38',
  chainName: 'BNB Smart Chain',
  nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  rpcUrls: ['https://bsc-dataseed.binance.org/'],
  blockExplorerUrls: ['https://bscscan.com/'],
}

// ==================== 合约地址（部署后替换） ====================
export const TOKEN_ADDRESS = '0x3Ab95642f783bf0A1901974e53F4ea6Be4DDdC81'
export const DAPP_ADDRESS = '0x18188C6024905c48151cd4C4d61FfD4669aD24Ab'
export const STAKING_ADDRESS = '0x5ce83EaF16DB893277B523ee7A725b6950f2e5F8'

// ==================== Token ABI ====================
export const TOKEN_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function decimals() view returns (uint8)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint256)',
  'function allowance(address,address) view returns (uint256)',
  'function approve(address,uint256) returns (bool)',
]

// ==================== BlackHoleDApp ABI ====================
export const DAPP_ABI = [
  // 参与
  'function participateBNB(address _ref) payable',
  'function participateToken(address _ref, uint256 tokenAmount)',
  // 领取
  'function claimBNBDividend()',
  'function claimTokenDividend()',
  // 查询
  'function pendingBNBDividend(address user) view returns (uint256)',
  'function pendingTokenDividend(address user) view returns (uint256)',
  'function getUserBNBInfo(address user) view returns (uint256 weight, uint256 totalReward, uint256 withdrawn, uint256 refCredited, uint256 lbCredited, uint256 pending)',
  'function getUserTokenInfo(address user) view returns (uint256 weight, uint256 totalReward, uint256 withdrawn, uint256 refCredited, uint256 lbCredited, uint256 pending)',
  'function getUserRefInfo(address user) view returns (address ref, uint256 l1, uint256 l2, uint256 refBNB, uint256 refTk, bool active)',
  'function getBNBLeaderboard() view returns (address[10] addrs, uint256[10] amounts)',
  'function getTokenLeaderboard() view returns (address[10] addrs, uint256[10] amounts)',
  'function getLeaderboardPoolInfo() view returns (uint256 bnbPool, uint256 tokenPool, uint256 nextDistributeTime)',
  // 全局
  'function totalParticipantsBNB() view returns (uint256)',
  'function totalParticipantsToken() view returns (uint256)',
  'function totalBNBInvested() view returns (uint256)',
  'function totalTokenInvested() view returns (uint256)',
  'function totalTokenBurned() view returns (uint256)',
  'function totalActiveBNBWeight() view returns (uint256)',
  'function totalActiveTokenWeight() view returns (uint256)',
  'function referrer(address) view returns (address)',
  // 参数
  'function minBNB() view returns (uint256)',
  'function maxBNB() view returns (uint256)',
  'function minToken() view returns (uint256)',
  'function maxToken() view returns (uint256)',
]

// ==================== StakingPool ABI ====================
export const STAKING_ABI = [
  // 操作
  'function stake(uint256 tokenAmount)',
  'function unstake(uint256 stakeId)',
  // 查询
  'function pendingReward(address user, uint256 stakeId) view returns (uint256)',
  'function getUserStakeCount(address user) view returns (uint256)',
  'function getUserStakeInfo(address user, uint256 stakeId) view returns (uint256 amount, uint256 startTime, uint256 endTime, bool claimed, uint256 reward, bool canUnstake)',
  'function getPoolInfo() view returns (uint256 pool, uint256 activeWeight, uint256 staked, uint256 distributed, uint256 snapshotCount, uint256 nextSettle)',
  'function totalStaked() view returns (uint256)',
  'function rewardPool() view returns (uint256)',
]
